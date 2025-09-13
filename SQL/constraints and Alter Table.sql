-- create database startersql;
-- use startersql;
-- it can t be possible because email is unique. aisha@example.com email is already exist in the table.
-- insert into users (name,email, gender,date_of_birth,salary) values ("Aarav","aisha@example.com","Male","1995-05-14",65000);
-- alter table users add constraint unique_email unique(email);
-- alter table users modify column name varchar(100) null;
-- Check constraints 
alter table users add constraint chk_dob check(date_of_birth > "1920-01-01");
insert into users (name,email, gender,date_of_birth,salary) values ("Aarav","aisha2@example.com","Male","1905-05-14",65000);

select * from users;
