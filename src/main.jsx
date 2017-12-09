import React from 'react';

export default class EditableLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	isEditing: this.props.isEditing || false,
			text: this.props.text || "",
        };
        
        this._handleFocus = this._handleFocus.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }
    
    _handleFocus() {
    	if(this.state.isEditing) {
        	if(typeof this.props.onFocusOut === 'function') {
        		this.props.onFocusOut(this.state.text);
            }
        }
        else {
        	if(typeof this.props.onFocus === 'function') {
	        	this.props.onFocus(this.state.text);
            }
        }
    
    	this.setState({
        	isEditing: !this.state.isEditing,
        });
    }
	
    _handleChange() {
    	this.setState({
        	text: this.refs.textInput.value,
        });
    }

    render() {
    	if(this.state.isEditing) {
        	return <div>
        	    <input type="text" 
                    className={this.props.inputClassName}
                    ref="textInput"
                    value={this.state.text} 
                    onChange={this._handleChange}
                    onBlur={this._handleFocus}
                    style={{ 
                    	width: this.props.width,
                        height: this.props.height,
                        fontSize: this.props.inputFontSize,
                        fontWeight: this.props.inputFontWeight,
                        borderWidth: this.props.borderWidth,
               			
                    }}
                    maxLength={this.props.maxLength}
                    placeholder={this.props.placeHolder}
                    tabIndex={this.props.tabIndex}
                    autoFocus/>
        	</div>
        }
    
        return <div>
            <label className={this.props.labelClassName}
                onClick={this._handleFocus}
                style={{
                	fontSize: this.props.labelFontSize,
                    fontWeight: this.props.labelFontWeight,
                }}>
                {this.state.text}
            </label>
        </div>;
    }
}
