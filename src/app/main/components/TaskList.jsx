import moment from 'moment'

const centerTd = {textAlign: 'center'}

const TaskList = ({timers}) => {
  const rows = timers.map(t => <TaskRow key={t.id} {...t} />)
  return (
    <div className="column is-one-third">
      <table className="table">
        <thead>
          <tr>
            <th>Started at</th>
            <th>Shared</th>
            <th style={centerTd}>Status</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    </div>
  )
}

TaskList.defaultProps = {
  timers: []
}

function getStatus(status){
  switch (status){
  case 'started': return <span className="icon"><i className="pi-pomodoro-ticking"></i></span>
  case 'completed': return <span className="icon"><i className="pi-pomodoro-done"></i></span>
  case 'squashed': return <span className="icon"><i className="pi-pomodoro-squashed"></i></span>
  default: return <span></span>
  }
}

function TaskRow(props){
  var sharedWith = props.sharedWith.map(w => <span className="tag is-info" key={w} >{`${w}`}</span>)
  return (
    <tr>
      <td>{moment(props.startedAt).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td>{sharedWith}</td>
      <td style={centerTd}>{getStatus(props.status)}</td>
    </tr>)
}

export default TaskList