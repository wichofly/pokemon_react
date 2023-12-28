import ColorBox from './ColorBox';
import './Colorbox.css';

const ColorboxGrid = ({ colors }) => {
  const boxes = [];

  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }

  // for (const color of colors) {
  //   boxes.push(<ColorBox color={color} />);
  // }

  // colors.forEach((color) => {
  //   if (boxes.length < 25) {
  //     boxes.push(<ColorBox color={color} />);
  //   }
  // });

  console.log(boxes);

  return (
    <div className="colorBoxGrid">
      {boxes}

      {/* <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} />
      <ColorBox colors={colors} /> */}
    </div>
  );
};

export default ColorboxGrid;
