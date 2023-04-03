import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header';
import Home from './components/Home';
import Footer from './components/common/Footer';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Header signOut={ signOut } />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Card>
    </View>
  );
}

export default withAuthenticator(App);
