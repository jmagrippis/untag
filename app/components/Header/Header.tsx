import {Link} from 'react-router-dom'
import {RoutePath} from '../../utils/routes'

export const Header = () => (
	<header>
		<h1>
			<Link to={RoutePath.Home}>Untag</Link>
		</h1>
		<ul>
			<li>
				<Link to={RoutePath.OddPhotoOut}>Odd Photo Out</Link>
			</li>
		</ul>
	</header>
)
