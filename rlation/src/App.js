import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles ,alpha} from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 650,
  },
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
function App() {
  const classes = useStyles();
  const [User, setUser] = useState({})
  const [Name, setName] = useState()
  const [friend1, setfriend1] = useState()
  const [Lname, setLname] = useState([])
  const data1 = []
  const addchange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...User,
      [name]: value
    })
    
  }
  const addnamechange = (e) => {
    const { name, value } = e.target;

    setName({
      ...Name,
      [name]: value
    })
   
  }
  useEffect(() => {
    
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', '[]')
    }
    return () => {
      
    }
  }, [])
 
  const submite = (e) => {
    let frindseq= []
    const findFriend = (Name)=> {
      let Friends = []
      FRIEND?.forEach(element => {
        debugger
        if(element.Name === Name || element.Friend === Name){
          if( element.Name === Name) 
            Friends.push(element.Friend)
          else 
            Friends.push(element.Name)
        }
      });
      return Friends
    }
    let fnfrinds = findFriend(Name.Name)
    setfriend1(fnfrinds)
    let lnfrinfd = findFriend(Name.Friend)
    console.log('fnfrinds', fnfrinds)
    console.log('lnfrinfd', lnfrinfd)
    let comanfrnd = findCommonfrnd(fnfrinds, lnfrinfd)
    if(comanfrnd.length <1){
      let dum_friend = []
      for (const i of fnfrinds) {
          let friendofi = findFriend(i)
          if(friendofi.length>1)
            dum_friend.push({i:friendofi})
      }
      for (const i of lnfrinfd) {
        let friendofi = findFriend(i)
        if(friendofi.length>1)
          dum_friend.push({i:friendofi})

     for (let index = 0; index < dum_friend.length; index++) {
       const element = dum_friend[index];
       let commanfrind = findCommonfrnd(Object.values(element),Object.values(dum_friend[index+1]))
     }   
    }

    }
    function findCommonfrnd(fnfrinds, lnfrinfd){
      return fnfrinds.filter(x => lnfrinfd.includes(x))
    }
    console.log('Fname=====comanfrnd==============',comanfrnd)
  } 


  const Submite = () => {
    if (JSON.parse(localStorage.getItem('user'))) {
      let data = JSON.parse(localStorage.getItem('user'))
      data.push(User)
      localStorage.setItem('user', JSON.stringify(data))
    }
    window.location.reload()
  }

 
  let FRIEND = JSON.parse(localStorage.getItem('user'))
  return (
    <> 
    <div className="App">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField  id="standard-basic" name="Name" label="Name" value={User?.Name} variant="standard" onChange={addchange} />
        <TextField id="standard-basic" name="Friend" label="Friend name" value={User?.Relation} variant="standard" onChange={addchange} />
      </Box>


      <Button variant="contained" onClick={Submite}>Add</Button>
     

    </div>
   
    <div> 


<Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField  id="standard-basic" name="Name" label="Friend name" value={Name?.Name} variant="standard" onChange={addnamechange} />
    <TextField id="standard-basic" name="Friend" label="Friend name" value={Name?.Friend} variant="standard" onChange={addnamechange} />
  </Box>


  <Button variant="contained" onClick={submite}>Find Relation</Button>
 


</div>
    <TableContainer >
    <Table className={classes.table} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            <TableCell align="right">Name&nbsp;</TableCell>
            <TableCell align="right">Friend&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FRIEND?.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row?.Name}</TableCell>
              <TableCell align="right">{row?.Friend}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    
    </>
  );
}

export default App;
