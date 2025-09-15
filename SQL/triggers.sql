use startersql;



-- create table user_log(
-- id int auto_increment primary key,
-- user_id int,
-- name varchar(100),
-- created_on timestamp default current_timestamp
-- )


 -- delimiter $$
--  
--  create trigger after_user_insert
--  after insert on users
--  for each row 
--  begin
--   insert into user_log(user_id, name)
--   values(new.id, new.name);
--  end $$
--  
-- delimiter ;
  
  
  -- insert into users(name, email, gender, date_of_birth, salary) values
--   ("Anand","anand12@gmail.com", "male", "2002-01-01", 56000);

-- drop trigger if exists after_user_insert;

select * from users;
select * from user_log;
