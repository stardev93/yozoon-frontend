import PropTypes from 'prop-types';
import Header from './Header/Header';
import HeaderLinks from "./Header/HeaderLinks.js";
import Footer from "./Footer/Footer.js";
export default function HomeContainer({ children }) {
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      {children}
      <Footer />
    </div>
  );
}

HomeContainer.propTypes = {
  children: PropTypes.any,
};
