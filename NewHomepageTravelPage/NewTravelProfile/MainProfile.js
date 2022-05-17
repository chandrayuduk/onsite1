
import React, { useEffect, useState } from 'react';
import Section from '../../../modules/components/Section';
import { Box, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, FormControl, Rating, Grid, Container } from '@mui/material';
import Typography from "../../../modules/components/Typography";
import TextField from '../../../modules/components/TextField';
import Avatar from '../../../modules/components/Avatar';
import { useRownd } from '@rownd/react';
import Button from "../../../modules/components/Button";
import AdapterDateFns from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { textAlign } from "@mui/system";
import { makeStyles } from "@mui/styles";


const flightOptions = [
    'Economy',
    'Premium Economy',
    'Business',
    'First',
]

const seatingOptions = [
    'Window',
    'Middle',
    'Aisle',
]

const bedOptions = [
    'King Bed',
    'Queen Bed',
    'Double Bed',
    'Suite',
]

const roomOptions = [
    'Balcony with a view',
    'Balcony, but view is not a priority',
    'No balcony, but view is a priority',
]

const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Kosher',
    'Halal',
    'Gluten-Free',
    'None',
    'Open to all cuisines',
    'Other',
]

const containerStyle = {
    my: 4,
    p: 10,
    background: 'white',
    borderRadius: 2,
    boxShadow: 2,
}

const cardStyle = {
    width: '20%',
    maxWidth: 300,
    height: '30%',
    maxHeight: 400,
    background: 'white',

}


const useStyles = makeStyles((theme) => ({
    media: {
        height: "250px",
        [theme.breakpoints.down("sm")]: {
            height: "150px ",
        },
    },
    gridone: {
        justifyContent: "left"
    },
    boxone: {
        marginBottom: theme.spacing(5),
    },
    innerbox: {
        maxWidth: "50%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "80%",
        },
    }
}));


const MainProfile = () => {


    const { is_initializing, user } = useRownd();

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        date_of_birth: "",
        domestic_flight: [],
        int_flight: [],
        primary_airport: "",
        seating: [],
        lodging_rating: 0,
        bed: [],
        room_amenities: [],
        dietary: [],
    }

    const [values, setValues] = useState(initialValues)
    const [hasLoadedUserData, setHasLoadedUserData] = useState(false);

    useEffect(() => {
        if (!is_initializing && !hasLoadedUserData) {
            setValues({
                ...values,
                ...user.data,
            })
            setHasLoadedUserData(true);
        }
    }, [hasLoadedUserData, is_initializing, user.data, values])

    function handleChange(name, value, list = false) {
        console.log(value);
        if (list) {
            if (value) {
                const copyOflist = values[name];
                copyOflist.push(value);
                setValues({
                    ...values,
                    [name]: copyOflist,
                })
            } else {
                const copyOflist = values[name];
                const index = copyOflist.indexOf(value);
                copyOflist.splice(index, 1);
                setValues({
                    ...values,
                    [name]: copyOflist,
                })
            }
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    }
    // const [checked, setChecked] = React.useState(true)




    // let dietx =
    //     dietaryOptions.map((option) => {
    //         // const toggleCheckbox = (event, option) => {
    //         //     return (

    //         // }
    //         return (
    //             <FormControlLabel
    //                 key={option}
    //                 control={
    //                     <Checkbox
    //                         value={option}
    //                         checked={checked}
    //                         onChange={(event, option) => {
    //                             return (
    //                                 setChecked(event.target.checked) ? value.dietary.includes(option) : false)
    //                         }}

    //                     />
    //                 }
    //                 label={option} > {option}
    //             </FormControlLabel >
    //         )
    //     })

    // const [openAlert, setOpenAlert] = useState(false)
    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpenAlert(false);
    // };
    const [value, setValue] = React.useState(new Date());
    function handleSubmit(event) {
        event.preventDefault();
        if (is_initializing) return;

        window.rownd.user.set(values);


    }

    const [datevalue, setdateValue] = React.useState(new Date());

    const classes = useStyles();
    return (<div>

        <Box
            marginTop="7%"
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', mx: 'auto', }}
        >

            <Container sx={{ mb: 4, justifyContent: 'center' }}>

                <Box className={classes.boxone} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, }}>
                    {/* NEED TO TERNARY OPERATOR FOR IF NAMES ARE BLANK */}
                    {/* <Avatar name={values.first_name} /> */}

                    <Grid item className={classes.gridone} container px={2} py={5} direction="column" alignItems="center" justify="center">
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 5, }}
                        >
                            Personal Information
                        </Typography>
                        <Box maxWidth="50%">
                            <InputLabel id="profile-first-name-label" sx={{ whiteSpace: "normal !important", }} >First Name</InputLabel>
                            <TextField
                                id="profile-first-name-input"
                                variant="filled"
                                value={values.first_name}
                                onChange={(e) => handleChange('first_name', e.target.value)}
                                sx={{ minWidth: '90%', borderRadius: '10px !important', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-last-name-label" sx={{ whiteSpace: "normal !important", }} >Last Name</InputLabel>
                            <TextField
                                id="profile-last-name-input"
                                variant="filled"
                                value={values.last_name}
                                onChange={(e) => handleChange('last_name', e.target.value)}
                                sx={{ minWidth: '90%', borderRadius: '25px', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Email</InputLabel>
                            <TextField
                                id="profile-email-input"
                                variant="filled"
                                value={values.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                sx={{ minWidth: '90%', borderRadius: '25px', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Phone Number</InputLabel>
                            <TextField
                                id="profile-phone-number-input"
                                variant="filled"
                                value={values.phone_number}
                                onChange={(e) => handleChange('phone_number', e.target.value)}
                                sx={{ minWidth: '90%', borderRadius: '25px', marginBottom: "15px" }}
                            />
                            <InputLabel id="profile-email-label" sx={{ whiteSpace: "normal !important", }} >Date of Birth</InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    inputLabel="Date of Birth"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    // onChange={(evt) => handleChange('date_of_birth', evt)}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                            </LocalizationProvider>

                        </Box>

                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box className={classes.boxone} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, }}>

                    <Grid item className={classes.gridone} container px={2} py={5} direction="column" alignItems="center" justify="center" maxWidth="100vw">
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 5, }}
                        >
                            Transportation
                        </Typography>
                        <Box className={classes.innerbox} whiteSpace={5}>
                            <Box>
                                <InputLabel id="profile-domestic-flight-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }}  >How do you typically like to fly domestically?</InputLabel>
                                <Select
                                    id="profile-domestic-flight-input"
                                    value={values.domestic_flight}
                                    onChange={(e) => handleChange("domestic_flight", e.target.value)}
                                    sx={{ minWidth: '90%' }}
                                >
                                    {flightOptions.map((option) => {
                                        return (
                                            <MenuItem
                                                key={option}
                                                value={option}
                                                onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                            >
                                                {option}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </Box>
                            <InputLabel id="profile-int-flight-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >How do you typically like to fly internationally?</InputLabel>
                            <Select
                                id="profile-int-flight-input"
                                value={values.int_flight}
                                onChange={(e) => handleChange('int_flight', e.target.value)}
                                sx={{ minWidth: '90%' }}
                            >
                                {flightOptions.map((option) => {
                                    return (
                                        <MenuItem
                                            key={option}
                                            value={option}
                                            onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                        >
                                            {option}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            <InputLabel id="profile-primary-airport-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >Please enter your preferred Airport for Departure</InputLabel>
                            <TextField
                                id="profile-primary-airport-input"
                                value={values.primary_airport}
                                onChange={(e) => handleChange('primary_airport', e.target.value)}
                            />
                            {/* Add code for Airport Selector */}
                            <InputLabel id="profile-seating-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >Please select your preferred flight seating</InputLabel>
                            <FormGroup
                                id="profile-seating-select"
                                value={values.seating}
                            >
                                {seatingOptions.map((option) => {
                                    return (<>
                                        <FormControlLabel
                                            key={option}
                                            onChange={(e) => handleChange('seating', option, true)}
                                            control={
                                                <Checkbox
                                                    value={option.value}
                                                    checked={values.seating.includes(option)}
                                                />
                                            }
                                            label={option}>{option}
                                        </FormControlLabel>
                                    </>
                                    )
                                })}
                            </FormGroup>
                        </Box>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box className={classes.boxone} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, }}>

                    <Grid item className={classes.gridone} container px={2} py={5} direction="column" alignItems="center" justify="center" maxWidth="100vw">
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Lodging
                        </Typography>
                        <InputLabel id="profile-lodging-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }}   >
                            Please select your lodging rating preference</InputLabel>
                        <Rating
                            id="profile-lodging-rating"
                            value={values.lodging_rating}
                            onChange={(e) => handleChange('lodging_rating', Number(e.target.value))}
                        />
                        <InputLabel id="profile-bed-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >Select your bed preference</InputLabel>
                        <FormGroup
                            id="profile-bed-select"
                            value={values.bed}

                        >
                            {bedOptions.map((option) => {
                                return (

                                    <FormControlLabel
                                        key={option}
                                        onChange={(e) => handleChange('bed', e.target.value, true)}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.bed.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>

                                )
                            })}
                        </FormGroup>
                        <InputLabel id="profile-room-amenities-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >Select your preferred room features</InputLabel>
                        <FormGroup
                            id="profile-room-amenities-select"
                            value={values.room_amenities}
                        >
                            {roomOptions.map((option) => {
                                return (
                                    <FormControlLabel
                                        key={option}
                                        onChange={(e) => handleChange('room_amenities', e.target.value, true)}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.room_amenities.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ mb: 4, justifyContent: 'center' }}>
                <Box className={classes.boxone} sx={{ opacity: 0.8, width: '100%', height: '30%', position: 'relative', borderRadius: 2, boxShadow: 2, }}>

                    <Grid item className={classes.gridone} container px={2} py={5} direction="column" alignItems="center" justify="center">
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Dining
                        </Typography>
                        <InputLabel id="profile-dietary-label" sx={{ whiteSpace: "normal !important", textAlign: "center" }} >Do you have any food preference or dietary restrictions?</InputLabel>
                        <FormGroup id="profile-dietary-select"
                            value={values.dietary}
                            onChange={(e) => handleChange('dietary', e.target.value, true)}
                        >
                            {dietaryOptions.map((option) => {
                                return (
                                    <FormControlLabel
                                        key={option}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.dietary.includes(option)}

                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>

                    </Grid>

                </Box>
            </Container>
            <Box margin="auto" sx={{ maxWidth: 200 }} >
                <Button margin="auto" id="profile-save-button" variant="contained" color="secondary" type="submit" sx={{ width: 200, mb: 10 }}>Save</Button>
            </Box>
            {/* <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Profile Updated Successfully!
                </Alert>
            </Snackbar> */}
        </Box >
    </div >
    );
}

export default MainProfile;
