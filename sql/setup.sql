-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS conventions;

CREATE TABLE conventions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    genre  VARCHAR,
    season VARCHAR,
    structure VARCHAR
);

INSERT INTO conventions (
    name, genre, season, structure
)
VALUES
('Twin Cities Con', 'multi', 'fall/winter', 'corporation'),
('Anime Detour', 'anime', 'spring', 'non-profit'),
('Anime Nebraskon', 'anime', 'fall', 'non-profit'),
('C2E2', 'multi', 'multi', 'unknown'),
('Ai-Kon', 'anime', 'summer', 'unknown');

