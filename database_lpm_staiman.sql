-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 8.4.3 - MySQL Community Server - GPL
-- OS Server:                    Win64
-- HeidiSQL Versi:               12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Membuang struktur basisdata untuk lpm_staiman
-- CREATE DATABASE IF NOT EXISTS `lpm_staiman` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
-- USE `lpm_staiman`;

-- membuang struktur untuk table lpm_staiman.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.cache: ~4 rows (lebih kurang)
-- Data diabaikan untuk pembersihan (clean upload)

-- membuang struktur untuk table lpm_staiman.cache_locks
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.cache_locks: ~0 rows (lebih kurang)

-- membuang struktur untuk table lpm_staiman.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.failed_jobs: ~0 rows (lebih kurang)

-- membuang struktur untuk table lpm_staiman.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.jobs: ~0 rows (lebih kurang)

-- membuang struktur untuk table lpm_staiman.job_batches
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.job_batches: ~0 rows (lebih kurang)

-- membuang struktur untuk table lpm_staiman.kategori_profils
CREATE TABLE IF NOT EXISTS `kategori_profils` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.kategori_profils: ~5 rows (lebih kurang)
INSERT INTO `kategori_profils` (`id`, `nama`, `deskripsi`, `created_at`, `updated_at`) VALUES
	(1, 'Profil', 'Tentang Kami', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(2, 'Akreditasi', 'Dokumen Akreditasi', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(3, 'Penjaminan Mutu', 'Sistem Penjaminan Mutu Internal', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(4, 'Layanan', 'Layanan dan SOP', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(5, 'Prestasi', 'Pencapaian dan Penghargaan', '2026-02-05 00:22:35', '2026-02-05 00:22:35');

-- membuang struktur untuk table lpm_staiman.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.migrations: ~8 rows (lebih kurang)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0001_01_01_000000_create_users_table', 1),
	(2, '0001_01_01_000001_create_cache_table', 1),
	(3, '0001_01_01_000002_create_jobs_table', 1),
	(4, '2025_09_30_012650_create_kategoris_table', 1),
	(5, '2025_09_30_012705_create_surats_table', 1),
	(6, '2026_02_05_065734_create_personal_access_tokens_table', 1),
	(7, '2026_02_05_065804_create_kategori_profils_table', 1),
	(8, '2026_02_05_065820_create_profils_table', 1);

-- membuang struktur untuk table lpm_staiman.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.password_reset_tokens: ~0 rows (lebih kurang)

-- membuang struktur untuk table lpm_staiman.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.personal_access_tokens: ~4 rows (lebih kurang)
-- Data diabaikan untuk pembersihan (clean upload)

-- membuang struktur untuk table lpm_staiman.profils
CREATE TABLE IF NOT EXISTS `profils` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `kategori_profil_id` bigint unsigned NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci,
  `file_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `profils_kategori_profil_id_foreign` (`kategori_profil_id`),
  CONSTRAINT `profils_kategori_profil_id_foreign` FOREIGN KEY (`kategori_profil_id`) REFERENCES `kategori_profils` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.profils: ~14 rows (lebih kurang)
INSERT INTO `profils` (`id`, `kategori_profil_id`, `judul`, `deskripsi`, `file_path`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Sambutan Ketua LPM', '<p>Sambutan Ketua LPM - Tersedia untuk diunduh</p>', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 04:28:46'),
	(2, 1, 'Profil STAIMAN', 'Profil STAIMAN - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(3, 1, 'Tupoksi LPM', 'Tupoksi LPM - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(4, 2, 'Panduan Izin Penyelenggaraan Prodi', 'Panduan Izin Penyelenggaraan Prodi - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(5, 2, 'Dokumen Akreditasi', 'Dokumen Akreditasi - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(6, 2, 'Status Akreditasi Kampus', 'Status Akreditasi Kampus - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(7, 3, 'SK Rektor', 'SK Rektor - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(8, 3, 'Template RPS', 'Template RPS - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(9, 3, 'Pedoman Evaluasi', 'Pedoman Evaluasi - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(10, 3, 'Sistem Audit Mutu Internal', 'Sistem Audit Mutu Internal - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(11, 4, 'SOP Disabilitas STAIMAN', 'SOP Disabilitas STAIMAN - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(12, 4, 'Konsultasi Mutu', 'Konsultasi Mutu - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(13, 4, 'Evaluasi Dosen', 'Evaluasi Dosen - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35'),
	(14, 5, 'Prestasi P. Thoriqul Aziz', 'Prestasi P. Thoriqul Aziz - Tersedia untuk diunduh', 'profils/profil/01KGPRZMYPDV8G5C0HF82AXW4P.pdf', '2026-02-05 00:22:35', '2026-02-05 00:22:35');

-- membuang struktur untuk table lpm_staiman.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.sessions: ~2 rows (lebih kurang)
-- Data diabaikan untuk pembersihan (clean upload)

-- membuang struktur untuk table lpm_staiman.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel lpm_staiman.users: ~2 rows (lebih kurang)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Admin', 'admin@example.com', NULL, '$2y$12$o7XJN5IeOp1ufzu1pGBovOs3TNjlsRmyr8Yoqxb0yC7hD7CIYPtrS', NULL, '2026-02-05 00:22:47', '2026-02-05 00:39:27'),
	(2, 'admin', 'admin@email.com', NULL, '$2y$12$ueTsCd5jMTp/f8F0z.TIj.9S7UQC/bYumShU0GwYcveXquwwKNwyS', NULL, '2026-02-05 01:55:42', '2026-02-05 04:22:04');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
