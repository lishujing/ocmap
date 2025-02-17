import { Coordinate } from "ol/coordinate";
import Style from "ol/style/Style";

const addOutlineShadow = (
  ctx: CanvasRenderingContext2D,
  option: {
    coodArr: Coordinate[];
    fillStyle: string;
    shadowBlur?: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
  }
) => {
  // 设置属性控制图形的外观
  ctx.fillStyle = option.fillStyle || "transparent";
  //  设置Y轴偏移量
  ctx.shadowOffsetY = option.shadowOffsetY || 20;
  //  设置X轴偏移量
  ctx.shadowOffsetX = option.shadowOffsetX || 2;
  //  设置模糊度
  ctx.shadowBlur = option.shadowBlur || 2;
  //  设置阴影颜色
  ctx.shadowColor = option.shadowColor || "#000";
  ctx.beginPath();
  const arr = option.coodArr || [];
  for (let i = 0; i < arr.length; i++) {
    const data = arr[i];
    if (i === 0) {
      ctx.moveTo(data[0], data[1]);
    } else {
      ctx.lineTo(data[0], data[1]);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

// 生成图层阴影
const genShadowLayerStyle = (
  fillColor: string,
  shadowColor: string,
  shadowOffsetX: number,
  shadowOffsetY: number
): Style => {
  return new Style({
    renderer: (coordinate, state) => {
      const arr = coordinate?.[0]?.[0] as Coordinate[];
      const ctx = state.context;
      addOutlineShadow(ctx, {
        coodArr: arr,
        fillStyle: fillColor,
        shadowColor: shadowColor,
        shadowOffsetX: shadowOffsetX,
        shadowOffsetY: shadowOffsetY,
      });
    },
  });
};

export { addOutlineShadow, genShadowLayerStyle }