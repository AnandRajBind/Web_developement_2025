use startersql;

 -- select avg(salary) from users;
-- select * from users where salary > (select avg(salary) from users);

-- select id, name, referred_by_id
-- from users
-- where referred_by_id in (
-- select id from users where salary> 50000
-- ); 

-- select id, name, referred_by_id
-- from users
-- where referred_by_id in (
-- select id from users where salary< (select avg(salary) from users)
-- );
 
 
 select name , salary,
 (select avg(salary) from users) as average_employee_salary
 from users;
 
