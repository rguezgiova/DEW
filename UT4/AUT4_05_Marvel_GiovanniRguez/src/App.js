import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';
import Crud from './components/Crud/Crud';

/**
 * Componente principal que contiene todo lo necesario para que la App tenga funcionamiento
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const [filmList, setFilmList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const url = "https://mcuapi.herokuapp.com/api/v1/movies"
  const [selectedlist, setSelectedlist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      let order = data.data;
      order.sort((a,b) => (a.id > b.id) ? 1 : -1);
      setFilmList(order);
      setDataIsLoaded(true);
    }
    fetchData();
  }, [url]);

  const totalFilms = selectedlist
      .map(film => film.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);


  /**
   * Función que añade una nueva película
   * @param newFilm a añadir
   */
  function addNewFilm(newFilm) {
    let newFilmList = [...filmList];
    newFilmList.push(newFilm);
    setFilmList(newFilmList);
  }

  /**
   * Función que añade una película a la lista de seleccionadas
   * @param film seleccionada
   */
  function addToSelected(film) {
    let found = selectedlist.find(element => element.movie === film);
    if (found !== undefined) {
      let newFilmList = [...selectedlist];
      newFilmList[newFilmList.indexOf(found)].quantity++;
      setSelectedlist(newFilmList);
    } else {
      let newFilmList = [...selectedlist];
      newFilmList = newFilmList.concat([
        {
          'movie': film,
          'quantity': 1
        }
      ]);
      setSelectedlist(newFilmList);
    }
  }

  /**
   * Función que elimina una película de la lista seleccionada
   * @param film a eliminar
   */
  function removeFromSelected(film) {
    let found = selectedlist.find(element => element.movie === film);
    if (found !== undefined) {
      if (found.quantity > 1) {
        let newMovieList = [...selectedlist];
        newMovieList[newMovieList.indexOf(found)].quantity--;
        setSelectedlist(newMovieList);
      }
      else if (found.quantity === 1) {
        let newMovieList = [...selectedlist];
        newMovieList.splice(newMovieList.indexOf(found), 1);
        setSelectedlist(newMovieList);
      }
    }
  }

  if (dataIsLoaded) {
    return (
        <>
          <div className="container-fluid">
            <Router>
              <Routes>
                <Route exact path='/' element={
                  <Main filmList={filmList} addToSelected={addToSelected} selectedList={selectedlist} removeFromSelected={removeFromSelected} totalFilms={totalFilms}></Main>}>
                </Route>
                <Route exact path='detail/:id' element={
                  <Detail filmList={filmList} ></Detail>}>
                </Route>
                <Route exact path='/new' element={
                  <Crud addNewFilm={addNewFilm} filmList={filmList}></Crud>}>
                </Route>
              </Routes>
            </Router>
          </div>
        </>
    );
  } else {
      return (
          <h1>No se han recibido los datos de la api</h1>
      );
  }
}

export default App;
