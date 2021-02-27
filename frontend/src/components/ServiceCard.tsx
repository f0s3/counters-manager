import { Service } from "../store/slices/services"
import { Link } from "react-router-dom"
import "../styles/ServiceCard.css"

interface Props {
	service: Service
}

export function ServiceCard({ service }: Props) {
	const { id, name, history } = service
	const { value: lastValue } = history.length > 0
		? history.reduce((last, counter) => last.date > counter.date ? last : counter)
		: { value: "-" }

	return (
		<div className="service-card">
			<h2>{name}</h2>
			<p>Поточний показник: -</p>
			<p>Останній показник: {lastValue}</p>
			<div className="controls">
				<Link to={`/services/${id}/history`} className="history">History</Link>
				<Link to="" className="send">Send</Link>
			</div>
		</div>
	)
}
