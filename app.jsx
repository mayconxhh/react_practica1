var React = require('react');
var ReactDOM = require('react-dom');

var Anime = React.createClass({
	// Forma de declarar estados
	getInitialState: function(){
		return {color: "gray"}
	},
	handleLike: function(){
		//Modifica el estado del componente
		this.setState({
			color: "red"
		})
	},
	render: function(){
		return (
			<div className="col-xs-12 col-sm-6 col-md-3">
				<h1 className="bg-success">{this.props.name}</h1>
				<p className="bg-info">
					Nacionalidad <i>{this.props.children}</i>
				</p>
				<img className="avatar img-responsive" src={this.props.img} />
				<p className="bg-info">
					<span className="glyphicon glyphicon-heart glyphicon-hear-lg" style={this.props.color} onClick={this.handleLike}></span>
				</p>
			</div>
		)
	}
});

// Like: <b>{String(this.state.like)}</b>
// <br/>
//<input onChange={this.handleLike} defaultChecket={this.state.like} type="checkbox" className="glyphicon glyphicon-heart glyphicon-hear-lg"/>
ReactDOM.render(<div className="centerBlock row">
		<Anime name="Rias Gremory" img="./img/rias.png">
			Japonesa
		</Anime>
		<Anime name="Konata Izumi" img="./img/konata.jpg">
			Japonesa
		</Anime>
		<Anime name="Umaru Doma" img="./img/umaru.jpg">
			Japonesa
		</Anime>
		<Anime name="Akatsuki" img="./img/akatsuji.jpg">
			Japonesa
		</Anime>
	</div>, document.getElementById('container'));