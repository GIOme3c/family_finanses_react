import './expenses-diagram.scss'

export default function BudgetDiagram({percent}) {
  return (
    <div className='relative pie animate no-round' style={{"--p":100,"--c":"white;"}}>
      <div class="pie animate no-round" style={{"--p":percent,"--c":"orange;"}}> {percent} </div>
    </div>
    
  )
}