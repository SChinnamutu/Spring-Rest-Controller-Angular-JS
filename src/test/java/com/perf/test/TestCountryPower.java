package com.perf.test;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.modules.junit4.PowerMockRunner;

import com.perficient.bean.Country;
import com.perficient.service.CountryService;


@RunWith(PowerMockRunner.class)
public class TestCountryPower {

	@Mock
	private CountryService countryService;
	
	@Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }
	
	@Test
	public void checkUserUsingPower(){
		PowerMockito.when(countryService.getCountry(1)).thenReturn(createTestEntity());
	}
	
	@Test
	public void doNothingUsingPower(){
		PowerMockito.doNothing().when(countryService);
	}

	@Test
	public void doReturnUsingPower(){
		PowerMockito.doReturn("Test").when(countryService.getCountry(1).getCountryName());
	}
	

	
	private Country createTestEntity() {
		Country indiaCountry = new Country(11, "India",10000);
		return indiaCountry;
	}
	
}
