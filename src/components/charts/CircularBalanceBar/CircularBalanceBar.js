import {useState,useEffect} from "react";
import * as d3 from "d3";

// If income amount less than the expense amount turn color to red 
const useColorIndication = (balancePercentage) => {
  const [colorIndicator, setColorIndicator] = useState();
  useEffect(() => {
    balancePercentage > 50
      ? setColorIndicator("green")
      : setColorIndicator("red");
  }, [balancePercentage]);
  return colorIndicator;
}

// Declare the state of financial balance 
const useBalance = (balancePercentage) => {
  const [balance, setBalance] = useState();
  useEffect(() => {
    balancePercentage > 50
      ? setBalance("fine 😃")
      : setBalance("critic! 😣");
  }, [balancePercentage]);
  return balance;
}

// Create arc area for draw
const BalanceArc = (props) => {
  const {svgWidth, arcWidth, balancePercentage, colorIndicator } = props;
  const svgHeight = svgWidth;
  const arcOuterRadius = svgWidth / 2;
  const arcInnerRadius = svgWidth / 2 - arcWidth;
  const arcGenerator = d3
    .arc()
    .innerRadius(arcInnerRadius)
    .outerRadius(arcOuterRadius)
    .startAngle(0)
    .cornerRadius(10);
  const balanceArc = value =>
    arcGenerator({
      endAngle: 2 * Math.PI * value
    });

  return (
      <svg height={svgHeight} width={svgWidth}>
        <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
          <path  className='stroke-current stroke-2 fill-current text-gray-100 dark:text-gray-800' d={balanceArc(1)} />
        </g>
        <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
          <path
            className='transform rotate-90'
            d={balanceArc(balancePercentage / 100)}
            fill={colorIndicator}
          />
          <text className='text-2xl font-medium fill-current' y='10' textAnchor='middle'>
            {balancePercentage}%
          </text>
        </g>
      </svg>
  );
}

// Draw the chart
const BalanceCircle = () => {
  const svgWidth = 120;
  const arcWidth = 14;
  const balancePercentage = 65;
  const colorIndicator = useColorIndication(balancePercentage);
  const balance = useBalance(balancePercentage);
  
  return (
    <div className='flex flex-col items-center m-auto pt-2'>
      <BalanceArc 
        svgWidth={svgWidth}
        arcWidth={arcWidth}
        balancePercentage={balancePercentage}
        colorIndicator={colorIndicator}
      />
      <p className='text-center mt-3'>Your financial balance is {balance}</p>
    </div>
  );
}

export default BalanceCircle