import { useSelector } from "react-redux"
import { ServiceCard } from "./ServiceCard"


export function ServiceList() {
	const services = useSelector(({ services }) => services)
	
	return (
		<div>
			{services.map(service => <ServiceCard service={service} key={service.id} />)}
		</div>
	)
}
