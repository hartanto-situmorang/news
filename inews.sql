-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 12:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inews`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'tes', '2024-10-29 13:46:36', '2024-10-29 13:46:36'),
(2, 'SPORT', 'Sport', '2024-10-30 03:45:24', '2024-10-30 03:45:24');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `id_categories` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `image`, `author`, `id_categories`, `createdAt`, `updatedAt`) VALUES
(2, 'test', 'test', 'tes', 'tes', 1, '2024-10-29 13:46:17', '2024-10-29 13:46:17'),
(5, 'Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global. Pemerintah meluncurkan beberapa inisiatif untuk meningkatkan investasi lokal dan memperkuat sektor ekspor. Dalam wawancara terbaru, Menteri Keuangan menekankan pentingnya stabilitas', 'ekonomi-indonesia.png', 'Hartanto', 2, '2024-10-29 04:44:25', '2024-10-30 03:25:36'),
(6, 'Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global. Pemerintah meluncurkan beberapa inisiatif untuk meningkatkan investasi lokal dan memperkuat sektor ekspor. Dalam wawancara terbaru, Menteri Keuangan menekankan pentingnya stabilitas', 'ekonomi-indonesia.png', 'Hartanto', 2, '2024-10-29 04:44:25', '2024-10-30 03:38:02'),
(7, 'Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global. Pemerintah meluncurkan beberapa inisiatif untuk meningkatkan investasi lokal dan memperkuat sektor ekspor. Dalam wawancara terbaru, Menteri Keuangan menekankan pentingnya stabilitas', 'ekonomi-indonesia.png', 'Hartanto', 2, '2024-10-29 04:44:25', '2024-10-30 03:45:30');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241029094232-create-categories.js'),
('20241029094706-create-news.js'),
('20241029095948-create-users.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact`, `image`, `role`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(5, 'Admin User', 'admin@example.com', 'admin_profile.png', 'admin', 'admin1233', '$2b$10$MZYorc9UzEXpV7hhgCQmWuR66wh4W/ld3IkWn0UysTg7E3J9pwiVq', '2024-10-30 03:25:09', '2024-10-30 03:25:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
