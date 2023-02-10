DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    entry_date DATE NOT NULL,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(100),
    diary_entry VARCHAR(560), 
    PRIMARY KEY (entry_id)
);