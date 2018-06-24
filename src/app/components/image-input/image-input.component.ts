import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
  selector: "tablk-image-input",
  templateUrl: "./image-input.component.html",
  styleUrls: ["./image-input.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageInputComponent implements OnChanges {
  @Input() public resizeWidth = 0;
  @Input() public resizeHeight = 0;
  @Input() public defaultImage?: string;
  @Output() public changeImage = new EventEmitter<string>();
  @ViewChild("image") public image: ElementRef;
  public canvas?: HTMLCanvasElement;
  public context: CanvasRenderingContext2D | null;

  public ngOnChanges() {
    this.canvas = this.image.nativeElement;
    if (this.canvas == null) {
      return;
    }
    this.context = this.canvas.getContext("2d");
    if (this.context == null) {
      return;
    }
    this.setDefaultImage();
  }

  public async setDefaultImage() {
    if (this.context == null) {
      return;
    }
    if (this.defaultImage != null) {
      this.setNewImageToCanvas(this.defaultImage);
      return;
    }
    this.context.fillStyle = "rgb(240, 240, 240)";
    this.context.fillRect(0, 0, this.width, this.height);
  }

  public clearCanvas() {
    if (this.context == null) {
      return;
    }
    this.context.fillStyle = "rgb(255, 255, 255)";
    this.context.fillRect(0, 0, this.width, this.height);
  }

  public emitChangeImage(base64Image: string) {
    this.changeImage.emit(base64Image);
  }

  public setNewImageWithEmit(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files == null) {
      return;
    }
    const file: File = inputElement.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.setNewImageToCanvas(reader.result).then(resizedBase64 => {
        if (resizedBase64 == null) {
          return;
        }
        this.emitChangeImage(resizedBase64);
      });
    };
    reader.readAsDataURL(file);
  }

  public async setNewImageToCanvas(srcUrl: string) {
    if (this.context == null || this.canvas == null) {
      return;
    }

    const image = await this.loadImage(srcUrl);
    const { offsetX, offsetY, width, height } = this.getCoverOffset(
      this.width,
      this.height,
      image.width,
      image.height
    );
    this.clearCanvas();
    this.context.drawImage(image, offsetX, offsetY, width, height);
    const outputBase64 = this.canvas
      .toDataURL("image/jpg", 0.8)
      .replace(/^data:image\/(png|jpg);base64,/, "");
    return outputBase64;
  }

  public loadImage(srcUrl: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        resolve(image);
      };
      image.src = srcUrl;
    });
  }

  private getCoverOffset(
    parentWidth: number,
    parentHeight: number,
    childWidth: number,
    childHeight: number
  ) {
    const childRatio = childWidth / childHeight;
    const parentRatio = parentWidth / parentHeight;
    let width = parentWidth;
    let height = parentHeight;

    if (childRatio < parentRatio) {
      height = width / childRatio;
    } else {
      width = height * childRatio;
    }

    return {
      width,
      height,
      offsetX: (parentWidth - width) / 2,
      offsetY: (parentHeight - height) / 2
    };
  }
}
