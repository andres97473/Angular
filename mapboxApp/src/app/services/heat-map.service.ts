import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeatMapService {

  // array que solo guarda las coordenadas
  puntos:number[][][]

  // objeto para manejar mas datos de las coordenadas
  geoJson=
  {
    'type': 'FeatureCollection',
    'crs': { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:OGC:1.3:CRS84' } },
    'features': 
      [
        { 'type': 'Feature', 'properties': { 'id': '1', 'name':'ANDRES 1', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584633,  0.779367 ] } },
        { 'type': 'Feature', 'properties': { 'id': '2', 'name':'ANDRES 2', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583517,  0.778767 ] } },
        { 'type': 'Feature', 'properties': { 'id': '3', 'name':'ANDRES 3', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583383,  0.779583 ] } },
        { 'type': 'Feature', 'properties': { 'id': '4', 'name':'ANDRES 4', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584,  0.778033 ] } },
        { 'type': 'Feature', 'properties': { 'id': '5', 'name':'ANDRES 5', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584183,  0.777867 ] } },
        { 'type': 'Feature', 'properties': { 'id': '6', 'name':'ANDRES 6', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583583,  0.778167 ] } },
        { 'type': 'Feature', 'properties': { 'id': '7', 'name':'ANDRES 7', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583583,  0.778167 ] } },
        { 'type': 'Feature', 'properties': { 'id': '8', 'name':'ANDRES 8', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5844,  0.777433 ] } },
        { 'type': 'Feature', 'properties': { 'id': '9', 'name':'ANDRES 9', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585033,  0.777833 ] } },
        { 'type': 'Feature', 'properties': { 'id': '10', 'name':'ANDRES 10', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585,  0.776783 ] } },
        { 'type': 'Feature', 'properties': { 'id': '11', 'name':'ANDRES 11', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585,  0.777833 ] } },
        { 'type': 'Feature', 'properties': { 'id': '12', 'name':'ANDRES 12', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585,  0.776783 ] } },
        { 'type': 'Feature', 'properties': { 'id': '13', 'name':'ANDRES 13', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585133,  0.777 ] } },
        { 'type': 'Feature', 'properties': { 'id': '14', 'name':'ANDRES 14', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585133,  0.777 ] } },
        { 'type': 'Feature', 'properties': { 'id': '15', 'name':'ANDRES 15', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584767,  0.776967 ] } },
        { 'type': 'Feature', 'properties': { 'id': '16', 'name':'ANDRES 16', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584767,  0.776967 ] } },
        { 'type': 'Feature', 'properties': { 'id': '17', 'name':'ANDRES 17', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584533,  0.7773 ] } },
        { 'type': 'Feature', 'properties': { 'id': '18', 'name':'ANDRES 18', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584267,  0.777633 ] } },
        { 'type': 'Feature', 'properties': { 'id': '19', 'name':'ANDRES 19', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.576583,  0.774383 ] } },
        { 'type': 'Feature', 'properties': { 'id': '20', 'name':'ANDRES 20', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.57725,  0.774183 ] } },
        { 'type': 'Feature', 'properties': { 'id': '21', 'name':'ANDRES 21', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.577533,  0.772433 ] } },
        { 'type': 'Feature', 'properties': { 'id': '22', 'name':'ANDRES 22', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.577367,  0.772367 ] } },
        { 'type': 'Feature', 'properties': { 'id': '23', 'name':'ANDRES 23', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.57915,  0.771317 ] } },
        { 'type': 'Feature', 'properties': { 'id': '24', 'name':'ANDRES 24', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.579267,  0.773917 ] } },
        { 'type': 'Feature', 'properties': { 'id': '25', 'name':'ANDRES 25', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.579133,  0.773433 ] } },
        { 'type': 'Feature', 'properties': { 'id': '26', 'name':'ANDRES 26', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5804,  0.774117 ] } },
        { 'type': 'Feature', 'properties': { 'id': '27', 'name':'ANDRES 27', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.580883,  0.774633 ] } },
        { 'type': 'Feature', 'properties': { 'id': '28', 'name':'ANDRES 28', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.582083,  0.77395 ] } },
        { 'type': 'Feature', 'properties': { 'id': '29', 'name':'ANDRES 29', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5826,  0.77355 ] } },
        { 'type': 'Feature', 'properties': { 'id': '30', 'name':'ANDRES 30', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.58315,  0.7748 ] } },
        { 'type': 'Feature', 'properties': { 'id': '31', 'name':'ANDRES 31', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583383,  0.7749 ] } },
        { 'type': 'Feature', 'properties': { 'id': '32', 'name':'ANDRES 32', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583483,  0.774383 ] } },
        { 'type': 'Feature', 'properties': { 'id': '33', 'name':'ANDRES 33', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5838,  0.773983 ] } },
        { 'type': 'Feature', 'properties': { 'id': '34', 'name':'ANDRES 34', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5847,  0.773667 ] } },
        { 'type': 'Feature', 'properties': { 'id': '35', 'name':'ANDRES 35', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584783,  0.77315 ] } },
        { 'type': 'Feature', 'properties': { 'id': '36', 'name':'ANDRES 36', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584483,  0.772783 ] } },
        { 'type': 'Feature', 'properties': { 'id': '37', 'name':'ANDRES 37', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5855,  0.771333 ] } },
        { 'type': 'Feature', 'properties': { 'id': '38', 'name':'ANDRES 38', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584067,  0.771933 ] } },
        { 'type': 'Feature', 'properties': { 'id': '39', 'name':'ANDRES 39', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583483,  0.772067 ] } },
        { 'type': 'Feature', 'properties': { 'id': '40', 'name':'ANDRES 40', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583117,  0.772533 ] } },
        { 'type': 'Feature', 'properties': { 'id': '41', 'name':'ANDRES 41', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.582333,  0.772067 ] } },
        { 'type': 'Feature', 'properties': { 'id': '42', 'name':'ANDRES 42', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583967,  0.770983 ] } },
        { 'type': 'Feature', 'properties': { 'id': '43', 'name':'ANDRES 43', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.583533,  0.769067 ] } },
        { 'type': 'Feature', 'properties': { 'id': '44', 'name':'ANDRES 44', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.584933,  0.7682 ] } },
        { 'type': 'Feature', 'properties': { 'id': '45', 'name':'ANDRES 45', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587533,  0.771983 ] } },
        { 'type': 'Feature', 'properties': { 'id': '46', 'name':'ANDRES 46', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587533,  0.771983 ] } },
        { 'type': 'Feature', 'properties': { 'id': '47', 'name':'ANDRES 47', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.586467,  0.772483 ] } },
        { 'type': 'Feature', 'properties': { 'id': '48', 'name':'ANDRES 48', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.586467,  0.772483 ] } },
        { 'type': 'Feature', 'properties': { 'id': '49', 'name':'ANDRES 49', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587783,  0.772783 ] } },
        { 'type': 'Feature', 'properties': { 'id': '50', 'name':'ANDRES 50', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587733,  0.773767 ] } },
        { 'type': 'Feature', 'properties': { 'id': '51', 'name':'ANDRES 51', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587817,  0.77015 ] } },
        { 'type': 'Feature', 'properties': { 'id': '52', 'name':'ANDRES 52', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589433,  0.77085 ] } },
        { 'type': 'Feature', 'properties': { 'id': '53', 'name':'ANDRES 53', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.58315,  0.7711 ] } },
        { 'type': 'Feature', 'properties': { 'id': '54', 'name':'ANDRES 54', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.585567,  0.769267 ] } },
        { 'type': 'Feature', 'properties': { 'id': '55', 'name':'ANDRES 55', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587733,  0.775283 ] } },
        { 'type': 'Feature', 'properties': { 'id': '56', 'name':'ANDRES 56', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5881,  0.775517 ] } },
        { 'type': 'Feature', 'properties': { 'id': '57', 'name':'ANDRES 57', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.588,  0.77215 ] } },
        { 'type': 'Feature', 'properties': { 'id': '58', 'name':'ANDRES 58', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.58805,  0.771833 ] } },
        { 'type': 'Feature', 'properties': { 'id': '59', 'name':'ANDRES 59', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587933,  0.77245 ] } },
        { 'type': 'Feature', 'properties': { 'id': '60', 'name':'ANDRES 60', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.588767,  0.77195 ] } },
        { 'type': 'Feature', 'properties': { 'id': '61', 'name':'ANDRES 61', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.58885,  0.771917 ] } },
        { 'type': 'Feature', 'properties': { 'id': '62', 'name':'ANDRES 62', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589083,  0.771867 ] } },
        { 'type': 'Feature', 'properties': { 'id': '63', 'name':'ANDRES 63', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589183,  0.771933 ] } },
        { 'type': 'Feature', 'properties': { 'id': '64', 'name':'ANDRES 64', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589283,  0.7718 ] } },
        { 'type': 'Feature', 'properties': { 'id': '65', 'name':'ANDRES 65', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589283,  0.7718 ] } },
        { 'type': 'Feature', 'properties': { 'id': '66', 'name':'ANDRES 66', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587117,  0.768917 ] } },
        { 'type': 'Feature', 'properties': { 'id': '67', 'name':'ANDRES 67', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.586867,  0.769117 ] } },
        { 'type': 'Feature', 'properties': { 'id': '68', 'name':'ANDRES 68', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.58625,  0.768767 ] } },
        { 'type': 'Feature', 'properties': { 'id': '69', 'name':'ANDRES 69', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587517,  0.768417 ] } },
        { 'type': 'Feature', 'properties': { 'id': '70', 'name':'ANDRES 70', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.587233,  0.767933 ] } },
        { 'type': 'Feature', 'properties': { 'id': '71', 'name':'ANDRES 71', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.588367,  0.76765 ] } },
        { 'type': 'Feature', 'properties': { 'id': '72', 'name':'ANDRES 72', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.588517,  0.767833 ] } },
        { 'type': 'Feature', 'properties': { 'id': '73', 'name':'ANDRES 73', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59025,  0.7717 ] } },
        { 'type': 'Feature', 'properties': { 'id': '74', 'name':'ANDRES 74', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590417,  0.771483 ] } },
        { 'type': 'Feature', 'properties': { 'id': '75', 'name':'ANDRES 75', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590383,  0.771383 ] } },
        { 'type': 'Feature', 'properties': { 'id': '76', 'name':'ANDRES 76', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590617,  0.771183 ] } },
        { 'type': 'Feature', 'properties': { 'id': '77', 'name':'ANDRES 77', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590983,  0.769433 ] } },
        { 'type': 'Feature', 'properties': { 'id': '78', 'name':'ANDRES 78', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.591533,  0.766233 ] } },
        { 'type': 'Feature', 'properties': { 'id': '79', 'name':'ANDRES 79', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.591583,  0.7662 ] } },
        { 'type': 'Feature', 'properties': { 'id': '80', 'name':'ANDRES 80', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5906,  0.768133 ] } },
        { 'type': 'Feature', 'properties': { 'id': '81', 'name':'ANDRES 81', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590683,  0.767517 ] } },
        { 'type': 'Feature', 'properties': { 'id': '82', 'name':'ANDRES 82', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589767,  0.766817 ] } },
        { 'type': 'Feature', 'properties': { 'id': '83', 'name':'ANDRES 83', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.589833,  0.765233 ] } },
        { 'type': 'Feature', 'properties': { 'id': '84', 'name':'ANDRES 84', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.590167,  0.766567 ] } },
        { 'type': 'Feature', 'properties': { 'id': '85', 'name':'ANDRES 85', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592267,  0.771 ] } },
        { 'type': 'Feature', 'properties': { 'id': '86', 'name':'ANDRES 86', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592433,  0.770583 ] } },
        { 'type': 'Feature', 'properties': { 'id': '87', 'name':'ANDRES 87', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5925,  0.770533 ] } },
        { 'type': 'Feature', 'properties': { 'id': '88', 'name':'ANDRES 88', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59205,  0.771 ] } },
        { 'type': 'Feature', 'properties': { 'id': '89', 'name':'ANDRES 89', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.591617,  0.7718 ] } },
        { 'type': 'Feature', 'properties': { 'id': '90', 'name':'ANDRES 90', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592933,  0.76955 ] } },
        { 'type': 'Feature', 'properties': { 'id': '91', 'name':'ANDRES 91', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593017,  0.769717 ] } },
        { 'type': 'Feature', 'properties': { 'id': '92', 'name':'ANDRES 92', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5929,  0.768983 ] } },
        { 'type': 'Feature', 'properties': { 'id': '93', 'name':'ANDRES 93', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59285,  0.768767 ] } },
        { 'type': 'Feature', 'properties': { 'id': '94', 'name':'ANDRES 94', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592933,  0.7679 ] } },
        { 'type': 'Feature', 'properties': { 'id': '95', 'name':'ANDRES 95', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593317,  0.767333 ] } },
        { 'type': 'Feature', 'properties': { 'id': '96', 'name':'ANDRES 96', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593167,  0.767267 ] } },
        { 'type': 'Feature', 'properties': { 'id': '97', 'name':'ANDRES 97', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59345,  0.7671 ] } },
        { 'type': 'Feature', 'properties': { 'id': '98', 'name':'ANDRES 98', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5934,  0.76665 ] } },
        { 'type': 'Feature', 'properties': { 'id': '99', 'name':'ANDRES 99', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592967,  0.766367 ] } },
        { 'type': 'Feature', 'properties': { 'id': '100', 'name':'ANDRES 100', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592967,  0.766367 ] } },
        { 'type': 'Feature', 'properties': { 'id': '101', 'name':'ANDRES 101', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592583,  0.766467 ] } },
        { 'type': 'Feature', 'properties': { 'id': '102', 'name':'ANDRES 102', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59245,  0.7664 ] } },
        { 'type': 'Feature', 'properties': { 'id': '103', 'name':'ANDRES 103', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5924,  0.766283 ] } },
        { 'type': 'Feature', 'properties': { 'id': '104', 'name':'ANDRES 104', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59245,  0.765633 ] } },
        { 'type': 'Feature', 'properties': { 'id': '105', 'name':'ANDRES 105', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.59245,  0.76565 ] } },
        { 'type': 'Feature', 'properties': { 'id': '106', 'name':'ANDRES 106', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.592667,  0.76565 ] } },
        { 'type': 'Feature', 'properties': { 'id': '107', 'name':'ANDRES 107', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593133,  0.76535 ] } },
        { 'type': 'Feature', 'properties': { 'id': '108', 'name':'ANDRES 108', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593167,  0.76565 ] } },
        { 'type': 'Feature', 'properties': { 'id': '109', 'name':'ANDRES 109', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593217,  0.765733 ] } },
        { 'type': 'Feature', 'properties': { 'id': '110', 'name':'ANDRES 110', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5933,  0.764933 ] } },
        { 'type': 'Feature', 'properties': { 'id': '111', 'name':'ANDRES 111', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.593833,  0.764183 ] } },
        { 'type': 'Feature', 'properties': { 'id': '112', 'name':'ANDRES 112', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5938,  0.764233 ] } },
        { 'type': 'Feature', 'properties': { 'id': '113', 'name':'ANDRES 113', 'time': 1507425650893, 'felt': null, 'tsunami': 0 }, 'geometry': { 'type': 'Point', 'coordinates':[  -77.5941,  0.76405 ] } }
      ]
  };

  constructor() {

    this.puntos=
      [
        [
          [ -77.584633, 0.779367],
          [ -77.583517, 0.778767],
          [ -77.583383, 0.779583],
          [ -77.584, 0.778033],
          [ -77.584183, 0.777867],
          [ -77.583583, 0.778167],
          [ -77.583583, 0.778167],
          [ -77.5844, 0.777433],
          [ -77.585033, 0.777833],
          [ -77.585, 0.776783],
          [ -77.585, 0.777833],
          [ -77.585, 0.776783],
          [ -77.585133, 0.777],
          [ -77.585133, 0.777],
          [ -77.584767, 0.776967],
          [ -77.584767, 0.776967],
          [ -77.584533, 0.7773],
          [ -77.584267, 0.777633],
          [ -77.576583, 0.774383],
          [ -77.57725, 0.774183],
          [ -77.577533, 0.772433],
          [ -77.577367, 0.772367],
          [ -77.57915, 0.771317],
          [ -77.579267, 0.773917],
          [ -77.579133, 0.773433],
          [ -77.5804, 0.774117],
          [ -77.580883, 0.774633],
          [ -77.582083, 0.77395],
          [ -77.5826, 0.77355],
          [ -77.58315, 0.7748],
          [ -77.583383, 0.7749],
          [ -77.583483, 0.774383],
          [ -77.5838, 0.773983],
          [ -77.5847, 0.773667],
          [ -77.584783, 0.77315],
          [ -77.584483, 0.772783],
          [ -77.5855, 0.771333],
          [ -77.584067, 0.771933],
          [ -77.583483, 0.772067],
          [ -77.583117, 0.772533],
          [ -77.582333, 0.772067],
          [ -77.583967, 0.770983],
          [ -77.583533, 0.769067],
          [ -77.584933, 0.7682],
          [ -77.587533, 0.771983],
          [ -77.587533, 0.771983],
          [ -77.586467, 0.772483],
          [ -77.586467, 0.772483],
          [ -77.587783, 0.772783],
          [ -77.587733, 0.773767],
          [ -77.587817, 0.77015],
          [ -77.589433, 0.77085],
          [ -77.58315, 0.7711],
          [ -77.585567, 0.769267],
          [ -77.587733, 0.775283],
          [ -77.5881, 0.775517],
          [ -77.588, 0.77215],
          [ -77.58805, 0.771833],
          [ -77.587933, 0.77245],
          [ -77.588767, 0.77195],
          [ -77.58885, 0.771917],
          [ -77.589083, 0.771867],
          [ -77.589183, 0.771933],
          [ -77.589283, 0.7718],
          [ -77.589283, 0.7718],
          [ -77.587117, 0.768917],
          [ -77.586867, 0.769117],
          [ -77.58625, 0.768767],
          [ -77.587517, 0.768417],
          [ -77.587233, 0.767933],
          [ -77.588367, 0.76765],
          [ -77.588517, 0.767833],
          [ -77.59025, 0.7717],
          [ -77.590417, 0.771483],
          [ -77.590383, 0.771383],
          [ -77.590617, 0.771183],
          [ -77.590983, 0.769433],
          [ -77.591533, 0.766233],
          [ -77.591583, 0.7662],
          [ -77.5906, 0.768133],
          [ -77.590683, 0.767517],
          [ -77.589767, 0.766817],
          [ -77.589833, 0.765233],
          [ -77.590167, 0.766567],
          [ -77.592267, 0.771],
          [ -77.592433, 0.770583],
          [ -77.5925, 0.770533],
          [ -77.59205, 0.771],
          [ -77.591617, 0.7718],
          [ -77.592933, 0.76955],
          [ -77.593017, 0.769717],
          [ -77.5929, 0.768983],
          [ -77.59285, 0.768767],
          [ -77.592933, 0.7679],
          [ -77.593317, 0.767333],
          [ -77.593167, 0.767267],
          [ -77.59345, 0.7671],
          [ -77.5934, 0.76665],
          [ -77.592967, 0.766367],
          [ -77.592967, 0.766367],
          [ -77.592583, 0.766467],
          [ -77.59245, 0.7664],
          [ -77.5924, 0.766283],
          [ -77.59245, 0.765633],
          [ -77.59245, 0.76565],
          [ -77.592667, 0.76565],
          [ -77.593133, 0.76535],
          [ -77.593167, 0.76565],
          [ -77.593217, 0.765733],
          [ -77.5933, 0.764933],
          [ -77.593833, 0.764183],
          [ -77.5938, 0.764233],
          [ -77.5941, 0.76405]
        ]
      ];
   }


}
