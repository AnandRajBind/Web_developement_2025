use startersql;
-- select  * from users;


-- delimiter $$
-- create procedure select_users()
-- begin 
-- select * from users;
-- end $$
-- delimiter ;

-- call select_users;


-- delimiter $$
-- create procedure AddUser(
-- in p_name varchar(100),
-- in p_email varchar(100),
-- in p_gender enum("male" , "female", "other"),
-- in p_dob date,
-- in p_salary int
-- )
-- begin 
-- insert into users(name, email, gender, date_of_birth, salary)
-- values (p_name, p_email, p_gender, p_dob, p_salary);
-- select * from users;
-- end $$
-- delimiter ;

-- call AddUser("anand", "anand23@gmail.com", "male", "2002-04-21", 71000);

-- show procedure status where db="startersql" 
-- drop procedure if exists AddUsers;


