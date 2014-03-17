INSERT INTO airplanes(
airplanes_code,
airplanes_name,
airplanes_year
)
VALUES (
2456,  'Airacomet',  2012
);

INSERT INTO airplanes(
airplanes_code,
airplanes_name,
airplanes_year
)
VALUES (
2542,  'Falcon',  2011
);

INSERT INTO airplanes(
airplanes_code,
airplanes_name,
airplanes_year
)
VALUES (
2341,  'Skytrain',  2012
);


INSERT INTO airports(
airports_code,
airports_name,
airports_city
)
VALUES (
1560,  'Sofia Airport',  'Sofia'
);

INSERT INTO airports(
airports_code,
airports_name,
airports_city
)
VALUES (
1560,  'Sofia Airport',  'Sofia'
);

INSERT INTO airports(
airports_code,
airports_name,
airports_city
)
VALUES (
1560,  'Sofia Airport',  'Sofia'
);


INSERT INTO company(
company_name,
company_country,
company_phone
)
VALUES (
'Bulgaria Air',  'Bulgaria',  070015355
);

INSERT INTO company(
company_name,
company_country,
company_phone
)
VALUES (
'Wizz Air',  'Hungaty',  964332
);

INSERT INTO company(
company_name,
company_country,
company_phone
)
VALUES (
'Bulgaria Air',  'Bulgaria',  070015355
);

INSERT INTO company(
company_name,
company_country,
company_phone
)
VALUES (
'Aeroflot',  'Russia',  0952235555
);

INSERT INTO customers(
customers_egn,
first_name,
last_name,
email
)
VALUES (
12173103,  'Dimitar ',  'Dimitrov',  'dimitrov@gmail.com'
);

INSERT INTO customers(
customers_egn,
first_name,
last_name,
email
)
VALUES (
10073103,  'Mitko ',  'Dimitrov',  'mitko@gmail.com'
);

INSERT INTO customers(
customers_egn,
first_name,
last_name,
email
)
VALUES (
15083403,  'Fodor ',  'Emilianenko',  'fedor@yahoo.com'
);


INSERT INTO flights(
flights_number,
flight_date,
flight_time,
dept_time,
arrv_time
)
VALUES (
179,  '2013-06-23',  '13:00:00',  '18:20:00',  '13:30:00'
);

INSERT INTO flights(
flights_number,
flight_date,
flight_time,
dept_time,
arrv_time
)
VALUES (
185,  '2013-06-27',  '15:00:00',  '20:20:00',  '15:30:00'
);

INSERT INTO flights(
flights_number,
flight_date,
flight_time,
dept_time,
arrv_time
)
VALUES (
204,  '2013-07-02',  '09:00:00',  '13:30:00',  '09:30:00'
);


INSERT INTO reservation(
reserve_id,
price,
reservation_date,
reservation_time
)
VALUES (
356,  99.99,  '2013-06-23',  '13:00:00'
);

INSERT INTO reservation(
reserve_id,
price,
reservation_date,
reservation_time
)
VALUES (
532,  60.99,  '2013-06-27',  '15:00:00'
);

INSERT INTO reservation(
reserve_id,
price,
reservation_date,
reservation_time
)
VALUES (
865,  89.99,  '2013-07-02',  '09:00:00'
);