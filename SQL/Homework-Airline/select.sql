SELECT airplanes_code, airplanes_name
FROM airplanes
WHERE airplanes_year<2012;

SELECT airports_code 
FROM airports 
WHERE airports_city='Sofia';

SELECT flights_number 
FROM flights 
WHERE flight_date<'2013-07-02';

SELECT customers_egn 
FROM customers
WHERE first_name LIKE 'F%' AND last_name LIKE '_m%';

SELECT MAX( price ) AS max_price,AVG( price ) AS avg_price
FROM  reservation;

SELECT company_name
FROM company
WHERE company_country LIKE 'R%';

SELECT COUNT(reserve_id) AS number_reservation
FROM reservation
WHERE price>'50.99';

SELECT reserve_id
FROM reservation
WHERE price>ALL(SELECT price
                                   FROM reservation);


