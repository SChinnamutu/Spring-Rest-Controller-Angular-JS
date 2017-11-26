package com.perf.test;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.powermock.api.mockito.PowerMockito;

import com.perficient.bean.Country;
import com.perficient.exception.CountryNotFoundException;
import com.perficient.service.CountryService;

public class TestCountryService {

	@Mock
	private CountryService countryService;
	
	@Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }
	
	
	@Test
	public void checkUser(){
		Mockito.when(countryService.getCountry(1)).thenReturn(createTestEntity());
	}
	
	

	@Test
	public void checkEqual(){
		Mockito.when(countryService.getCountry(1)).thenReturn(createTestEntity(),createTestEntity(),createTestEntity());
	}
	
	@Test
	public void checkEqualName(){
		Mockito.when(countryService.getCountry(1).getCountryName()).equals(createTestEntity().getCountryName());
	}
	
	@Test
	public void checkThrowable(){
		Mockito.when(countryService.getCountry(10)).thenThrow(new CountryNotFoundException("Country with id 10 not found"));
	}
	
	@Test
	public void verify(){
		Mockito.verify(countryService.getCountry(1),Mockito.atLeast(2));
	}
	
	@Test
	public void verifyTest(){
		Mockito.verify(countryService,Mockito.times(2));
	}

	
	private Country createTestEntity() {
		Country indiaCountry = new Country(11, "India",10000);
		return indiaCountry;
	}
	
	
}
