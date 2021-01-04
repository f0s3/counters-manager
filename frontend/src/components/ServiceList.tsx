import type { Store } from "../store/types"
import { useSelector } from "react-redux"
import { ServiceCard } from "./ServiceCard"


export function ServiceList() {
	const services = useSelector(({ services }: Store) => services)
	
	return (
		<div>
			{services.map(service => <ServiceCard service={service} key={service.id} />)}
		</div>
	)
}
