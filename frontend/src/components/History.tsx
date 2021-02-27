import { useParams, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import "../styles/History.css"
const months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]

interface Params {
	id: string
}

export function History() {
	const id = parseInt(useParams<Params>().id)
	const services = useSelector(({ services }) => services)
	const currentService = services.find(service => service.id === id)
	if (!currentService) return <Redirect to="/" />
	const { name, unitType, history } = currentService
	return (
		<div className="history">
			<h1>{name}</h1>
			<table>
				<thead>
					<tr>
						<th>Month</th>
						<th>Counter</th>
					</tr>
				</thead>
				<tbody>
					{history.map(({ value, date }) =>
						<tr key={date.getTime()}>
							<td>{months[date.getMonth()]}</td>
							<td>{value} {unitType}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}