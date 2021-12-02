import { container } from "styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontFamily: "ITC Ronda",
    fontSize: "2.81rem",
    display: "block",
    position: "relative",
    color: "#0c045d"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    maxWidth: '1400px'
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  mainRaised1: {
    margin: "auto",
    borderRadius: "6px",
    
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },

  gradientButton: {
    fontFamily: "ITC Ronda",
    marginTop: '40px',
    fontSize: '17px',
    padding: '13px 35px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: '#FFF',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    width: 'max-content',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '10px',
  },

  gradientButton1: {
    backgroundImage: 'linear-gradient(to right, #A800FF 0%, #7400FF 40%, #7400FF 100%)'
  },

  gradientPrice: {
    transition: '0.5s',
    backgroundSize: '200% auto',
    boxShadow: '0 0 20px #eee',
    width: 'max-content',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    display: 'inline-block',
    width: '25px', 
    borderRadius: '30px',
    color: '#0c045d'
  },
  gradientPrice1: {
    backgroundImage: 'linear-gradient(to bottom, #A800FF 50%, #7400FF 80%, #7400FF 100%)'
  },

  priceTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "15px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center'
  },

  productTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "17px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center'
  },
  categoriesTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "18px",
    display: "block",
    position: "relative",
    color: "#0c045d",
    textAlign: 'left'
  },
  
  column: {
    zIndex: 4,
   
  },
  best3TopProducts :{
    width: '95%',
    margin: 'auto',
    paddingTop: '50px'
  },
  otherProducts :{
    width: '99%',
    margin: 'auto',
    paddingTop: '50px'
  },
  card: {
    boxShadow: '0px 0px 10px 6px rgb(127 114 114 / 20%)',
    padding: '20px'
  },
  title_50: {
    paddingTop: '10px',
    fontFamily: "ITC Ronda",
    fontSize: "50px",
    display: "block",
    position: "relative",
    color: "#0c045d",
    textAlign: 'left'
  },
  
 
  
};

export default componentsStyle;
