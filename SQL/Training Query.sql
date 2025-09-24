show databases;
use student;

-- create table collection(
-- id int auto_increment primary key not null,
-- name varchar(30) not null,
-- roll_number int,
-- address varchar(50),
-- phone bigint,
-- city varchar(50),
-- age varchar(10),
-- gender varchar(10)
-- )

show tables;
-- insert into collection(name , roll_number, address, phone, city, age, gender) values ("Anand", 10, "Uttar Pradesh", 8726271088, "Jaunpur", 20, "male"
-- );

-- INSERT INTO collection (name, roll_number, address, phone, city, age, gender) VALUES
-- ("Anand", 10, "Uttar Pradesh", 8726271088, "Jaunpur", 20, "male"),
-- ("Riya", 11, "Delhi", 9812345678, "New Delhi", 21, "female"),
-- ("Vikram", 12, "Maharashtra", 9988776655, "Mumbai", 22, "male"),
-- ("Sanya", 13, "Karnataka", 9123456789, "Bengaluru", 20, "female"),
-- ("Arjun", 14, "West Bengal", 9876543210, "Kolkata", 23, "male"),
-- ("Neha", 15, "Tamil Nadu", 9001122334, "Chennai", 21, "female"),
-- ("Rohit", 16, "Gujarat", 8123456789, "Ahmedabad", 22, "male"),
-- ("Priya", 17, "Rajasthan", 8765432109, "Jaipur", 20, "female"),
-- ("Manish", 18, "Punjab", 7890123456, "Amritsar", 24, "male"),
-- ("Isha", 19, "Bihar", 7001234567, "Patna", 21, "female");



-- select * from collection where age >=22;
-- select * from collection where gender="male";

-- add new column in table
 -- alter table collection  add  new_column varchar(100);
 
-- modify column datatype
-- alter table collection modify new_column int;



select * from collection;