CREATE TABLE airports(
airports_code INTEGER NOT NULL PRIMARY KEY,
airports_name VARCHAR(20),
airports_city VARCHAR(20)
);

CREATE TABLE company(
company_name VARCHAR(20) NOT NULL PRIMARY KEY,
company_country VARCHAR(20),
company_phone INTEGER
);

CREATE TABLE airplanes(
airplanes_code INTEGER NOT NULL PRIMARY KEY,
airplanes_name VARCHAR(20),
airplanes_year INTEGER
);

CREATE TABLE flights(
flights_number INTEGER NOT NULL PRIMARY KEY,
flight_date DATE,
flight_time TIME,
dept_time TIME,
arrv_time TIME
);

CREATE TABLE reservation(
reserve_id INTEGER NOT NULL PRIMARY KEY,
price DECIMAL(9,2),
reservation_date DATE,
reservation_time TIME
);

CREATE TABLE customers(
customers_egn INTEGER NOT NULL PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(20)
);