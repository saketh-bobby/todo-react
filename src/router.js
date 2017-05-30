import AllContainer from './ListTabs/AllContainer';
import PendingContainer from './ListTabs/PendingContainer';
import CompletedContainer from './ListTabs/CompletedContainer';
import PriorityContainer from "./ListTabs/PriorityContainer";

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