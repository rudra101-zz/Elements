var React = require("react");
var actions = require("../actions/SchoolActions");


module.exports = React.createClass({
	deleteSchool: function(e) {
			      e.preventDefault();
			      actions.deleteSchool(this.props.info);
		      },   
 render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        )
    }
})
