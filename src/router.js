import AllContainer from './TodoNav/AllContainer';
import PendingContainer from './TodoNav/PendingContainer';
import CompletedContainer from './TodoNav/CompletedContainer';
import PriorityContainer from "./TodoNav/PriorityContainer";

const routeConfig = [
	{
		exact:true,
		path:'/',
		component:AllContainer
	},
	{
		path:'/pending',
		component:PendingContainer
	},
	{
		path:'/completed',
		component:CompletedContainer
	},
	{
		path:'/priority',
		component:PriorityContainer
	}
];

export { routeConfig };