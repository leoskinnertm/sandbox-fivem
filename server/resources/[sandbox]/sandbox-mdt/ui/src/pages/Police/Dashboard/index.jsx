import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { BOLO } from './blocks';
import { NoticeBoard, Warrants } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import Nui from '../../../util/Nui';

const useStyles = makeStyles(theme => ({
	wrapper: {
		padding: '20px 10px 20px 20px',
	},
}));

export default () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cData = useSelector(state => state.app.user);
	const lastRefresh = useSelector(state => state.data.data.homeLastFetch);

	const warrants = useSelector(state => state.data.data.warrants);
	const notices = useSelector(state => state.data.data.notices);

	const fetch = async () => {
		try {
			let res = await (
				await Nui.send("GetHomeData", {})
			).json();

			if (res) {
				if (res.warrants) {
					dispatch({
						type: 'SET_DATA',
						payload: {
							type: "warrants",
							data: res.warrants,
						},
					});
				};

				if (res.notices) {
					dispatch({
						type: 'SET_DATA',
						payload: {
							type: "notices",
							data: res.notices,
						},
					});
				};
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (cData && (lastRefresh == 0 || (Date.now() - lastRefresh > 120000))) {
			dispatch({
				type: 'SET_DATA',
				payload: {
					type: "homeLastFetch",
					term: Date.now(),
				},
			});

			fetch();
		}
	}, []);

	return (
		<div className={classes.wrapper}>
			<Grid container spacing={2}>
				<NoticeBoard notices={notices} />
				<BOLO />
				<Warrants warrants={warrants} />
			</Grid>
		</div>
	);
};
