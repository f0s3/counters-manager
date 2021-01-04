--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: counter_values; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.counter_values (
    id integer NOT NULL,
    user_id integer,
    service_id integer,
    value bigint
);


ALTER TABLE public.counter_values OWNER TO postgres;

--
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    id integer NOT NULL,
    name text NOT NULL,
    login text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.services OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    token_id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_services (
    id integer NOT NULL,
    user_id integer,
    service_id integer
);


ALTER TABLE public.users_services OWNER TO postgres;

--
-- Name: counter_values counter_values_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counter_values
    ADD CONSTRAINT counter_values_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_services users_services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_services
    ADD CONSTRAINT users_services_pkey PRIMARY KEY (id);


--
-- Name: counter_values counter_values_service_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counter_values
    ADD CONSTRAINT counter_values_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id);


--
-- Name: counter_values counter_values_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.counter_values
    ADD CONSTRAINT counter_values_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users_services users_services_service_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_services
    ADD CONSTRAINT users_services_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id);


--
-- Name: users_services users_services_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_services
    ADD CONSTRAINT users_services_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

