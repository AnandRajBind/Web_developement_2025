use startersql;
select * from users;
-- select count(*) from users;
-- select count(*) from users where gender="Male";

-- select min(salary) as min_salary , max(salary) as max_salary from users;
-- select avg(salary) as avg_salary from users;
-- select sum(salary) as total_salary from users;
-- select gender, avg(salary) as avg_salary from users  group by gender;
-- select gender, sum(salary) as total_salary from users  group by gender;


-- String function 
-- select name, LENGTH(name) as name_len from users;
-- select name, id, LENGTH(name) as name_len from users;
-- select id,name,gender, lower(name) as lower_name, LENGTH(name) as name_len from users;
-- select id,name,  gender, lower(name) as lower_name, concat(lower(name), "5677") as username, now() as time, year(date_of_birth) as YOB, LENGTH(name) as name_len from users;
-- select id,name,  gender, lower(name) as lower_name, concat(lower(name), "5677") as username, now() as time, year(date_of_birth) as YOB,day(date_of_birth) as day,month(date_of_birth) as month, LENGTH(name) as name_len from users;
-- select name, datediff(curdate(), date_of_birth) as days from users;
SELECT salary,
       ROUND(salary) AS rounded,
       FLOOR(salary) AS floored,
       CEIL(salary) AS ceiled
FROM users;
 
 