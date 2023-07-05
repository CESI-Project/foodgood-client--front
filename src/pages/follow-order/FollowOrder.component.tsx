import './FollowOrder.component.scss';

interface FollowOrderComponentProps {
	status: string;
}

export const FollowOrderComponent = ({ status }: FollowOrderComponentProps) => (
	<div className='follow-order'>
		<h2>Votre Commande est :</h2>
		<h2 className='follow-order__status'>{status}</h2>
	</div>
);
