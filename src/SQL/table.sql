-- Active: 1714701530602@@127.0.0.1@3306@joeun
-- 상품 테이블
DROP TABLE IF EXISTS product;

CREATE TABLE product (
    no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    img TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- quantity     : 수량
-- stock        : 재고 수