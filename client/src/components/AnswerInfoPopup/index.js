import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './styles.scss';
import '../../commonStyles.scss';

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class AnswerInfoPopup extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleOkClick = this.handleOkClick.bind(this);
	}

	handleClick() {
		this.props.handleClose();
		this.props.showRightAnswer();
	}

	handleOkClick() {
		this.props.handleClose();
		this.props.nextQuestion();
	}

	render() {
		const { open, handleClose, imageUrl, answerStatus, message } = this.props;
		return (
			<Dialog
				className="dialog-content"
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
				<DialogTitle id="dialog-slide-image">
					{<img className="answer-status-logo" src={imageUrl} alt="answer-status" />}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="dialog-slide-description">
						{answerStatus ? 'Congratulations !' : ''}
					</DialogContentText>
				</DialogContent>
				<DialogContent>
					<DialogContentText id="dialog-slide-description">{message}</DialogContentText>
				</DialogContent>
				<DialogContent>
					<DialogContentText id="dialog-slide-description">
						You have{' '}
						{answerStatus ? (
							<span>
								<span>earned</span>
								<span className="correct-points"> 10</span>
							</span>
						) : (
							<span>
								<span>reduced</span>
								<span className="wrong-points"> -10</span>
							</span>
						)}{' '}
						<span>points.</span>{' '}
						{!answerStatus && (
							<button className="show-right-answer-button" onClick={this.handleClick}>
								Show me the answer
							</button>
						)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					{answerStatus ? (
						<Button className="ok-button" onClick={this.handleOkClick} color="primary">
							OK
						</Button>
					) : null}
				</DialogActions>
			</Dialog>
		);
	}
}

export default AnswerInfoPopup;
