## Introduction

**About the Experiment**

This experiment enables a student to learn
- How to realize the functionality of 4-bit Shift register
- How to verify the shifting of binary data on high to low transition of clock
- How to verify parallel loading of binary data on high to low transition of clock

## Theory

                          
Shift register: A register capable of shifting information either to right or left is called a shift register.In a shift register, the flip-flops are connected in such a way that the binary bits are entered into the shift register,shifted from one location to another and finally shifted out.Different types of shift register:
- Serial-in-Serial-out(SISO)
- Serial-in-Parallel-out(SIPO)
- Parallel-in-Serial-out(PISO)
- Parallel-in-Parallel-out(PIPO)

           
 #### 4 Bit Shift Register 

<div align="center">
 <img src="images/4bitshifter.jpg" style="width:400px;height:300px;" />
<p>Figure 1:&nbsp;74LS95B(4 bit Shift Register)</p></div>
						
The SN54/74LS95B is a 4-Bit Shift Register with serial and parallel synchronous operating modes.These operating modes are controlled by a mode control input (S). The serial shift right and parallel load are activated by separate clock inputs which are selected by a mode control input (S). The data is transferred from the serial or parallel D inputs to the Q outputs synchronous with the HIGH to LOW transition of the appropriate clock input.

- Synchronous, Expandable Shift Right
- Synchronous Parallel Load
- Separate Shift and Load Clock Inputs


 
VCC = PIN 14
GND = PIN 7   
PIN NAMES 
S: Mode Control Input 
DS: Serial Data Input 
P0–P3: Parallel Data Inputs
CP1: Serial Clock (Active LOW Going Edge) Input 
CP2: Parallel Clock (Active LOW Going Edge) Input 
Q0–Q3: Parallel Outputs



<div align="center">
<img src="images/logic diagram.jpg" /> 
<p>Figure 2:Logic Diagram of 74LS95B</p>
							</div>
                           
#### Functional Description 
S
The SN54/74LS95B is a 4-Bit Shift Register with serial and parallel synchronous operating modes. It has a Serial (DS) and four Parallel (P0–P3) Data inputs and four Parallel Data outputs (Q0–Q3). The serial or parallel mode of operation is controlled by a Mode Control input (S) and two Clock Inputs (CP1) and (CP2).When the Mode Control input (S) is HIGH, CP2 is enabled. A HIGH to LOW transition on enabled CP2 directly loads parallel data from the P0–P3 inputs to the Q0–Q3 outputs. When the Mode Control input (S) is LOW, CP1 is enabled. A HIGH to LOW transition on enabled CP1 transfers the data from Serial input (DS) to Q0 and shifts the data in Q0 to Q1, Q1 to Q2, and Q2 to Q3 respectively (right-shift). For normal operation, S should only change states when both Clock inputs are LOW. However, changing S from LOW to HIGH while CP2 is HIGH, or changing S from HIGH to LOW while CP1 is HIGH and CP2 is LOW will not cause any changes
on the register outputs.
                          

                             
#### MODE SELECT/TRUTH TABLE 

<div align="center">
<img src="images/exp9truthtable.jpg" style="width:700px;height:200px;" /></div>
							

- L=Low voltage level
- H=High voltage level
- X:Don't care
- X:Don't care
- l:Low voltage level one set-up prior to the high to low clock transition
- h:high voltage level one set-up prior to the high to low clock transition
- P<sub>n</sub>:Lower case letters indicate the state of referenced input(or output) one set-up time prior to the high to low clock transition
                        