package com.example.app.resources;

/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    //@Autowired
    //private SpringDataJpaUserDetailsService userDetailsService;
/*
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(this.userDetailsService)
                .passwordEncoder(Manager.PASSWORD_ENCODER);
    }
*/
    @Override
    protected void configure(HttpSecurity http) throws Exception {
		/*
		http
			.authorizeRequests()
				.antMatchers("/built/**", "/main.css").permitAll()
				.anyRequest().authenticated()
				.and()
			.formLogin()
				.defaultSuccessUrl("/", true)
				.permitAll()
				.and()
			.httpBasic()
				.and()
			.csrf().disable()
			.logout()
				.logoutSuccessUrl("/");
				*/
        http
                .authorizeRequests()
                .antMatchers("/built/**", "/main.css","/hello").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                //Use default
                .loginPage("/signin")
                .loginProcessingUrl("/login") //The loginProcessingUrl() method defaults to /j_spring_security_check and specifies the URL that the login form (which should include the username and password) should be submitted to, using an HTTP post.
                .usernameParameter("email")
                .passwordParameter("password")
                //The form action should be /login , to match the value provided for the loginProcessingUrl() method we specified. For security
                //reasons, Spring Security only attempts to authenticate when using POST by default.
                .failureUrl("/login/form?error")


                .defaultSuccessUrl("/", true)
                .permitAll()
                .and()
                .httpBasic()
                .and()
                .csrf().disable()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout")
                .permitAll();
    }

}
