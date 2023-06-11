// import React ,{useState, useEffect} from 'react';
// import { Container, Typography ,AppBar,Grow,Grid} from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
// import {getPosts} from './actions/posts';
// import useStyles from './styles';

// const App = ()=> {
//     const [currentId , setCurrentId] = useState(0);
//     const dispatch = useDispatch();
//     const classes = useStyles();
//     useEffect(()=>{
//         dispatch(getPosts());
//     },[currentId,dispatch]);
//     return (
//         <Container maxWidth="lg">
//             <AppBar className = {classes.appBar} position = "static" color="inherit">
//                 <Typography className={classes.heading} variant = "h2" align = "center">Earth-Trippers</Typography>
//             </AppBar>
//             <Grow in>
//         <Container>
//             <Grid container direction="column-reverse" justifyContent="space-between" alignItems="stretch" spacing={3}>
//                 <Grid item xs={12} sm={7}>
//                     <Posts setCurrentId={setCurrentId}/>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Form currentId={currentId} setCurrentId={setCurrentId}/>
//                 </Grid>
//             </Grid>
//         </Container>
//     </Grow>
//         </Container>
//     );
// };

// export default App;
//////////////////////////////////////////


import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
const App = ()=> (
    <BrowserRouter>
    <Container maxWidth="lg">
        <Navbar/>
        <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/auth" exact Component={Auth}/>
        </Routes>
    </Container>
    </BrowserRouter>
);

export default App;