use startersql;
-- create table admin_users(
-- id int primary key,
-- name varchar(100),
-- email varchar(100),
-- gender enum("male", "female","others"),
-- date_of_birth date,
-- salary int 
-- );

-- insert into admin_users (id, name, email, gender, date_of_birth, salary) values 
-- (101, 'Anil Kumar', 'anil@example.com', 'Male', '1985-04-12', 60000),
-- (102, 'Pooja Sharma', 'pooja@example.com', 'Female', '1992-09-20', 58000),
-- (103, 'Rakesh Yadav', 'rakesh@example.com', 'Male', '1989-11-05', 54000),
-- (104, 'Fatima Begum', 'fatima@example.com', 'Female', '1990-06-30', 62000);



-- The UNION operator in SQL is used to combine the result sets of two or more SELECT statements. It removes duplicates by default.

-- If you want to include all rows including duplicates, use UNION ALL.

select * from users;
select * from addresses;
select * from admin_users;

-- union 
-- select name, email from users 
-- union 
-- select name, email from admin_users;


-- union all 
select name, email, date_of_birth, "user" as role from users 
union all
select name, email, date_of_birth, "admin" as role from admin_users order by date_of_birth desc ;




