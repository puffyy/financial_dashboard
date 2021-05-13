import Chart from "react-google-charts";

const Graph = () => {
  return (
    <div className='flex m-0 min-h-full w-full border-l-2 border-r-2'>
      <Chart
        width={'100%'}
        height={'50vh'}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={[
          ['From', 'To', 'Amount'],
          ['Income', 'Saved', 1000],
          ['Income', 'Expense', 4000],
          ['Expense', 'Health Care', 1200],
          ['Expense', 'Restaurant & Cafe', 400],
          ['Expense', 'Textile', 300],
          ['Expense', 'Market', 1000],
          ['Expense', 'Sport', 600],
          ['Expense', 'Transportation', 500],
        ]}
      />
    </div>
  )
}

export default Graph
