import React from 'react'
import { Badge, CardImage, Container, ImageContainer, Row } from './styled'

const Content:React.FC = () => {
  const imageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgXFhUYGBgZHBkYHBwYGRoYGhwaGhgaGRoYGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQkJCQ0NDQ0MTQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0N//AABEIALQBGAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAD0QAAEDAgQEAwYEBAUFAQAAAAEAAhEDIQQFEjEGQVFhInGBEzKRobHwQsHR4RRScvEHI2KCwhWSorLSQ//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACIRAAMBAAMBAAMAAwEAAAAAAAABAhEDITESIkFRBBNxYf/aAAwDAQACEQMRAD8AUP4X/N1OJJPMkk/NQ8T4X2bQ4O3sR6SnKng2V5LR5IfnfD5LC55JjZTm8fYzkR8nzF7DAcY6SnXD5iA3Ub+a56+mWPI7pzyHEUvCahECDddH10Sc9hZ+IL2OebCJA2t1QzC1WaHPcDPIwU3PzjDQJeyAI2W1PNMK/wALS2PRRbbXY6SQn5VxPDHB0m5sZSVmOLc97nTuSV192AwxmA26BHgdtVxcD4SdggrSGabOZtlxgXJTXl+RQzW8Jnw/A1Om7Xe3Uyts0dpGkbBVmk1ojT0VKsM5Jq4eY6A6LfklLMHhMnCuaa2aDAc2BPUcis2E6rkzQQCi9Si0g2SllOYaCAUyjGtcy3RZvRUhWzsgT2S5isx8JARPiGq5sk7JKqY0EkSuZzr7OifBa4gxxc8hBmlG86wwNwgJKvKxEa9Nn3VzBkjmqQcpmVYVZaTErtDjlfEtamA0EEDqmDDcZvMAtlc0p4lEMJjQ0yqr4b7JP6Xh1NvGTA2Cw/ALU8VU3fgd8AkA5i0jdeUcxbMFP8cZP6sexxHSBuI9FWx3E1E7H5QkPMcffwlDK2MLlOpj9FJdMfKGKp4msGud4ByB3807Obh6dOG6QQOy4RhcQWukEg9QYRKpmbo94k9ySkUyxm2hwxWfNDiNQieq1ZmNJ+7h/wB0Ln9SuXGSsbWS/wCuRvpnQ316c2d85VzAsbvqlctNUzIMIlgc7ewgEyEj4v4MqH3iRrH0HCxMLmDJHonYZi17DfcJUxVL3o6p+OcFpg2tVJ3WKMrxLTejpI7HwRmDX2HIovxJdpASTwlXbTqQDvC6BWo67rlpZRWfDkGPyt7qlgtK2XVGC9l06rloa7VCDZlhtVoXRFdEqRzeqXzEkqzhaVUCbgInjsPofMWUr8bqZpaE7X8B/wBKDcyqAgAmQm3AcTPZTh4ul7KsH4yXBFa1APd2UqlMKrBuyjGOxI0tvO614nydzGF0bC694OqNpB5Pb4I/jMW3FMe1kXsqQl84Cq7OEY+r4iFvlOZGk9rh5HuFb4syl1CoQRCXpKLX6Mq07NRzFj6YdqXrOJGsEB23dc3ySjia0NZOkzJjYCJPz+RTvg+CmOZJJceoJP0Un+JTUyHF8TMqEtJhKz26qh0GxTbT4Lph10Uo5VhqDTq0TzLon0WlqujNtCg/LZYSSkvGU9LiO66+aFD2bneGDJmbBcvzcNLzp2lWU9E3WsEhegq/h8A54kNsjmT8NtqHxIPoG6KwK9Dl1BnBNEDYIXjuFKbZ29EFSZmhFa8r3WrOY4A03HeOqpSm0xI58rx2y0lehy2mwxgWxK9DhCicUdMbFyzUtC5akofQcJC9a6loVuynJhDWzYkSMxLhsVYw2L3DuasU8u0w52xU9bLNTdTVSYrSbuQJVF7LFvWokbr1JU9lE+h+yThmvIe60ct10jKzLQDuFPRZDYAgKEV2NNjdcda3pdJIlxlAQlbHhoKas3xLW0iQbpCqanuKrL6EaB+a0WuaUotqlj4T7Wwh0pQxuVve86Wkqs0TpF7C4sRbdTiu6VWyjJKvtmM0nxuAtvG7iPQE+i6o3KaVEgadNgPCxjpMEncEnY3MpORqQzLoSRifARMGIRHgXMfZvex3uEmCeR5+icaD6DnaXU2AxbUwNn8pUgLGOa1jGMJMeFrW/QW5JJp+oZyv2LXGGQPxhljDIFnGzfUmAl3Df4bFkOrOLzvopyGj+p5uR5Qus4jEspsNR+p4ECAJubAx0lLWY8YUg0HVpedwQ4Ft+YcBPpMKrpsVSgIMtqMY1rYYAIaywY0XPutEEzuXSbm6q4mhXYwv9oSN4AJiwgtk/wDEq/UxwqNLyQSIPhm17tnYkQeVxCizXGlrGjaRMgAmZhwsLibfdxpsA3/VMQ0EhxIDrh7y5x/pDwIbvyO26G5lmftT4gWnoTM+cbHsVZxmJGgOBJa6Wu2IuSJLfMAyD8whdXS12oMgEwRMh1wJAcPC7exnomlpdgwjxbzpg2QLSXPgCboriDLoB1NBt1E7hwN56+XZSYIU6T73abSLkE9RvCr6tQrffY1ZRQYKIlok9USweXgQZ52QgVNTQ5hkcoNla/jHNaB0Unmh7CGa1SxnhddKIxlR5Oq3XyV6pjnPMHbuqeOA0m4lFJIDKuZVGOZHNKNZmkq7iXuDuyge6d0WZFSVkqaymptabIDlMFYSm3BcLNqM1az6QqOP4ccyfFMJdRhfWQrFTDkLQMRSBpGArGGs4KFyloFNPTM/A5mFc6AFLlWPDW6XXChY3WyOYUJpgCOa6J3dRzUlmMJ5jTpvFolYhNc2EG4WKtNb4LKeenfWVWxulHinGtojWHc7+qW63FekEB0kJWznOalez7DovKXG2z0HSw6LTzI1mAzZHeHcnFUybAbrnvD2OijB5LonBmbgWOzoCWfxrGFrZ1DDicgpBu0+aU80qUqUhoE9AE58Q4jTSsd1zLHuklXJm+QY5z8bTIZMEmACfwneOWy6HjWAS4GWzMtL55OA8EgmQ07bNIvK5zlVf2b2uYy3iIafeqaQZLzyZPhA21EEzpJR9uKeynTp63GudBJbf336Xag4QfDrdESdLjDbJOSfoaa+WWsVgw5nh0FzTDGMqVJfWke1mbu0kGAbcrAlAXZtWa9jKoh0CXAHRN4HY+KCDCvuz8Fzmva4ilqLnMOppewUXktDrhxc9zWwdgRzCWTmFJzpbUAiXRp0EOLpc0sddou68EXi0wpy3PTQ7n68Z0XKs3FWab9O0aSRFrFoHPr/AGQTiTh5hJqidQB1Ni56w4Rc99+azh57H+JroePE5sQY5yx3hc2+7SNvNM1XCBzZJInYtd4ZAiSIsYAPpdP9d6hM/TOV4uppcC3UAQJBAAcAAfEO4/NT1M2aSHtaQILCCGu6gNuLhwNke4gyBjw97QGvHRw8W+3Kbg2jf4I2JqFg02EGLiHAgm/VVnGhX0W6lB1Qj2Z3MwdRHhEnUTEbmfzVethWBxa9mhxHhkgNMXBuIcOR81Hg8Q/WIeLuHuh07zOlou4Geu6ecHmLHg0cRSY+m/wlzm6YJBl8G5uZgCeazaRkc3ruIJ1M8eoQII0wILS2x7+nooMQC8NHTY8+vXa5+CauKnGi9tOWvDWgse0glzPwgxu5tvldK77g/wAszqIIAJ7RunnwRmmCxb6ROiQeY/CY2lvxR3CZwH2eNLrDsf6f0S45hbsWkbe8De/qo6taRc36x8JTOV+xexlzDMWNHh3S3Vxb3u57r2liWk+MT33MfmrVWowOBaBHKEEghajlIfSl28JZxeG0OIRutmby0NabIXUpPcZKIAc9i1arb6RG4VdzUrQyYz5Jj3tbZ5Cu4nEOe0jVKUsPUcNimjhuiKj4eUyc5jRNqt6Yv1cO8vDObiAPUpodwT4AZcHdeXwRnEZGwOa9pu0hw9CnFjGVGMg3XNz25z5OnilNP6OWUuAarnQXwP6b/VQZlwPXpXa4OHexXX8zZ7NgvG10u4itUdILpHcKS5a3sZ8a/RyvBvfSfpeCLxdEswwskObsVc4ha3V4mwVS9tLLHYL0eG9WM5OWMeoEVpDoXq3qiTqWJ8E6KbCQVdYWv3VQuC9DwFD5RbWNGHqsbhnNG8R6pi4AqF7mjoZSflODfVY4tExPPcjkO6cP8NXhr3A+8DBB5Ll5IxnTNdDxxTWs1vQJGxwTVxVXu0+YSjia4Mp5fQrWAnFZm+m0hnheRBfu8CbNZ/INu/dXcpzAsw5qOcdbWVdLt/8AOPtajHGObGuLj3qMHMoDmLvFKsZe04mo2iA5lNrHNBA1EDW19SoRze4gCOkC8CXS/pNnn8e+lhmMIj2j3PJMz7OmGNa0z1df/Y1WMtxP8Q40gDL4LXNGote3Yn/TaCuhcS12Ese/D03S3QwvYH6S5wdLQQHTYCRaAo62Q1HMILWscR5C5tAbF9rRzXPfNOeF442nugTIG1sO5ntafgds4GQxwtY7kG0HlMXXQP49sE6gDFnfhcI/EAbG+4/SeP5lhatGs5ge8gkEAuJmIuCTLYgjsjNXG1g1rZbpIJDTB8MRe08j0SpePfQ1j3rBnx9bWTAh25G0mJ1QDB33EHrySfnmGaWNePCbiSGieo6z2+xZfUc9gl+rnYDYbRz59ZHyFZ9N72lrvECJEuAcbe8JMOFxznfndVTJNC3RexpBAc4A+9JEif5RtdMVLN9OgDULERG/eb3jzG+wlL2JBaNIHhmCD4od3tAsPNQUKxvpkgHcCSCZjncz+afRcGDN3sq1AQ0iG2APX3ux227/AB8xWEoBmtl9XvNdrhvbeSDcjmL2VcElh8V2uEuMGehnfYRMk/ltTqCZe4AGI1OcRIFwJHXv5BFV+jNAavSbE2vMH8vsqjUbFjEevXdF30rHcyTJAda3XmD3F1QeyRNyPL8yqqhGihUaCYB79uynohwbHy3H7KNzR5cpC9pvtb0k/kjKWiskZX6GOxVqlVeL6SR1Fx8kLqm8/Fbscd2uId5x6zK3/hsCNXEtdyVN7AozXcT47+e/xXrhaRst0bs9DVco4hzILSQR0VAVFvqQa0I05Fmr3Ph7580x4bHupvBa7wzMLmrHEbFX8Nmj291Nwn6Mqa8O6YwU8Th4m8SI6pawLC4OZ+JiWuFs/LXtaXeF5iOhTNm1X2D/AGjb6hBC4eVPjrDq4/yWoQuLX+KOYkEJZw2KgEdUQ4mxBfVc7qZQJhuuvipqSHItYUrgtZ5rFapU/a04/EFi6tT7IZnQDDSV4aZR9lNgBMfZUFDDgm4UNKl/hDNxhydYsZIJ/CUWyPOIxj3tHgcGgHaSN3ffRAMRhWyAAi+SUNTwGj3YkrbqDPTHnF0H4gl/ICyX62AcXBo94mF07IMEBR8Qi3Nc94hx4oYwH8P0SpYhm9ZcZwHLA551c4TDlHD7GgaIYWkEFsSCNvzshzuLdTIG0bgodlHF+ioWuIAnmUrregpdjXmz6zWwwU9fNzhB7EQEo4vF41zj4g8mbNcJ8ri624m4kvLTcqlwtmWp5c88rT1Kl8L9FOhczGm8Ph7C15MjUC3e0j5XV7+GeIDhBIuG+IiLE/2k2sulhlKsxzXsa9htDhPqOh7hA8dkDWx7J7mxs0mbdA+J/wC6UzX8FFSp4CGFxcIAMjZwE3kWHzuvKwe5n+U8gAXadIt/t327IvifeLKlMUyBZ4BuQAAQ6TpMbjbyiFQw9LQ8seHEH+VwPhMbEyDe2/PqlQzXQExNBzhL/emDAuRJFyRMzF+cHpbSnlxbcNcWQTZwsIggxPOLjry3Tu3LQ4tN2nbkYIjd3S/5noqZwrQ4tBDCJ3DIgjqIAse1rTsqS9JUsFVmEczQ9moN2dM2JG/SSOsTy6C5WpvdBdqBEBxeyRH+nqNuluXW/jMMKTWjU0ggzqAsdRtGxuznMaj2RWhiGPYxrwfdDZBFo2EbRYQqORdEnH4bTBBBAOnpbe4kWJ8uVkNrNs2HarX7FNed0yGkOAHIWF94Eg995PJLVRhHIDoeR7iR+yZAZVe3lAHp9/NV3tOysyI7rQsv+W31TpisrObZaBpafs7q/wCzH99wOsKGpSg2v5ItfsCIHTa336L1lYj7upgTEn49o5dFA9nOUoS2ym192iO31heOZCpseQZmDy/urjKmrz+q2mInFbBy8cFGUQFmjULXNIMEEEfFdLrudUpMLui5dQu5o7j6rrOHpOLGwOS4v8tbh1/4rzRFzrLTJgJedl7xfSYXWH4DVu1VMVlgiNK3HTSNcpsQcqeWvB9CsRbM8oNOXNWLpmlhz1D0EU2zYqdovHRQl97cl7SNyUgS3rkmF0jgjK6bGB7gCTck9Vy2hVh908YXE1KdAVCIZvvy6wjvWBSOjZnnLGMhpGy4pxfmQfVMfFFc84gLqPg6XKUMFllbEvADTcxJ2RXYH0aYHGVNWlmozyCZP+gPcGvcbnp9O6Z8q4VZQYNUE9tye6asty1sguBgdrBalM+gTb8FPKuCnVGy/UOg/daYnhWrQMsMtn1XWGljGWICX8zxuuWNHqo1XfQ61C9l2KLWgTfmmLCYUvbqlC2ZVpvsqwz12HdodcHZCXjH3QjXoNcdDh5HmD1B5JfzrK6lFt3S106akAQ522roRv0MdlM/PWueL7poy3EtqsdSeLOEeXQjuN07nQfWCXgMXBJfP4oAmCC4EzpteXRyn5y4jMA4gMY2ZPiEEusWgEEzBLjYjYdbKPOMM6g/2ZEuPhnk5o8cxte3qfNCNDtbSDG5AtdwEt5AETIA/wBRElaXhqRYzt4EiBeZ2NgJ3BtDvlfqhOFxMB0gDpJEfO3rHZZj8RIYHREkDmYc2DJ/mFj6+ir08UBAcAQRAtMEk8vvdp87p6iTL+YYphYJMOIAu0gADYi15A89kuV3RBFx0i0XHJXKjpGkg26R5zHKVTfTkkQbDkAbdYWQGVD6zde3Jvf6/Bbhl/CeU3t8Fjgb/dkUBmjR1/ZexAkkXkG3Llf9F7tb4gkgHoVMGSIgEzYbg9II7pkArPpECdJb2v8ATdQVdxB++0K06nqdb5yfyiFXqgybDz2A+CwTWkQbG4KnGE2LT8TsqzgZV+gQIifWyeUn6TerwhdQfF2m3l8/1VdwTJTf4AQ0E+Q+4Q/FYVjrsseY7dR2C1TnhprfTOGcF7XEMbyB1H0XZ6bWMaG22XKODWOZXcdN2iCugYeo6q+wK4eZ/kdnGvxGbLsC194VPOcM1roRnKQKbJcUuZ5jmueSChXUmlbQsZ2BBHZYqGa4iZuvVOW8KtIoZxwm9gD6ZlpAMJcqseww4EFdNyXF66DJIPhhRY/KmVbOaL810I5TmjCNyjmY8TzhhRDbkBpPINH5qbH8IvbJYZHRbZTwa55Dn/BZvDAnDB5YA1hcOwsmfIcW8PaxtMg8yRYJswGT02ANDRAVipTZTeIbc9FKeV/WIZys0v0GyAXmLInSrs0kJeYx7ySTHQK1hzo3Ko+/RSR+FqPMNdDeqJ4PKmsFzJ6lVKWZAbLSpjnE7rYYJYjL2uG6C43hpjxLt+qt0cS7qvMTjIsthhHzbhpzHaqf4bx1WmA4n0HS9pa5tiE6tqg73S/muT03umBJR0xHmOZsxTBBh7LtNpI6TyKVziXh5AB5h03mLbHa0ciijuGXtcCx0Sidbhmowa3lpmBqbIPYOH5/FLUv1FJpeCqMJMnVAtEyTIEyDNzNwPihdZhaDO8zcdevQbeaeHZd4TcwCCdup5R3+qB4zAAt8MRMSJM9fuOaM0CpFtlbxERzM36DafJbsLdxH6+d+3yWz8IdUAXjbyjY85EfFQVKWkxa0XEcxMfAnforppkmj17GlsiLdLEX5jb1+qrgQP2v+261e4yCLR29IXgqdd0wCVjJBv5W3PSOV+ey8fEQWkOHMfp1UckxF/KVvo+B9fiBcJdMaPAAvE8vuPqoS2Tci/opizrP1lauvzED75CR6raYq7FT0n/cKFy9Hnf76JkwYEG14F5j80YwFRjh4tyI7/3S6X2i/kp8LitO4+o+YRm+8YtTq6HbKg1hiATsOUjcDsb7fYd8oYxlLXa/3HmuXYbE6mxNxt1TPl2OcWFsjUdxNn2s4dHfX4JeTiVfkvQ8fLU/i/AljMze98TA6BCM1raRutqbolx3QjNasriv3DuhdaBcxxZMrFQxT91iZT0JVdhXDVXsaA1xFlabnFVnOQsfRY0+8sFJjh7y9R8a8PO+2EMNxaRZzUVwvFNI9kpVsv6KnVwr28lOuGf4OuR/06hhs4pm4cCpK2JYSHbrkrKr27EhF8tzx4MPMhc74JXaKq2zoFXML+EwtqVfVul5gLxLHXVvC4yPC8QUrn+BVf0v1qmk2Kt4fGCJKHM0uMzKlZSgJWhi+zG+Kynq+ISgVKoQ+wRQVPCsYtsZZeOoAlVGYuAoX5iJW7MFKpAi91Dic/LQWP0xETzPaP0SzmvEAMtY7bd08ugS+95fJLiX9Jt3+iZJoHo14fNmPDmtBMQPMWmBNxBI67KjiWAjSCXbyI202HmP/ryUOVYaS0aTAF4Eb7wNzvur2IotksmYMixkki7TMSRPb9eelj1F5erBYxzYHhgmwdBsTLvhYD4IbWYCXTIkWgAjtN7fsExZjhwAXDlPIdRMHy5dkBxNPnMWgDeRFr7c/jKpNCVINcJ2AJt6zdV9Pz5bnkrVVg6W8ont99VBMH7+SqmTaPQ0DY+Y5/A/fZetO57T681Fr+/vdbawSJ22MfVHQYeT2XgO/wDb58ls0+o7rI+z+RW0BXfPp5qMyOSnd5KAraYkD+30WBx6X5bfPqo2uWxcs2FBHB4gg3JCPYDFQRF7/JK1CrpIkf2RbDYnxCNvpbsqzWonUjJisVpJEyDcH6JfzDEkq5ib0+v78j0v9QgNbESPvfmocsflpfht/OMrYh+6xU8S+6xLhm+y0ca+bFSNxbxdbfw2lV6xXT9sj8ov0s5cNwr9LOmOsUrkFYWFMuWhXxoaHuY/YhRuoBLzKhGxKJ4LMXAw64TKlXorloKYaq9h8Dj5ImM4LxD2+oQ3W1wstC+DCz416BUwqKzhdj/QohgM/LPDUHql41enyWe01CCi5l9MCprwd8BmtN7oEIhiXBomVzJjXsMsPfyUuKz+oW6A7/dz8h0Ub4Uuys22MOa8RMpyB4nfyj/keSWn4+tXJLnHT/K2w8u6E0Glzut/ijOGonmYG/fmpeFktLWBwpIh0xzA3sUcwOXagXnlBJuSAL7RHI2V7LcE0US5zQIki4AtEjV6fNHskw7ThH1SI6dbGNuZQYy6B2GaGU3vku0gGbX/AJdpsByW/D2HY7DV6tY2JADgYIiPHPIjf07rTM6kZY97TM1IJ3BbcAExbb7lVXtLMqptaLPJJj+mRvz8aRoKZDXYQ8sePEN3NAkj+byiDb4IbjsAJ8GwBMGDMRNib3/tCKV2uqYalXAJe1ml24J0ktv8CfVDqOJMQQ0jYE85AMRzglSacvoddi9jMMRbYESY63mZMgfoOaGOYZEX6Qd7/LmmjHUBJgSHAAkfUA3IsPL6iqlENOrT0A6SZuD9781SaEqQaaW0w2BHr+Xkq72ERsR1nfz/AHRKqNW+xNz06/fJUH0yNx2+KZMTD1kdL9R+Y5rwj17rARFt1uIunTAQOJHNaPAI5TtEfOVK8KItW0xAWEL1q9eFoWraYma6EQwL5Gkdfh8ELCkw9csMjyKMvGClqGfCkuJaTIIifl+iX8ypEeLkTfz5/MfNHMsq64cHXBaCOdyYPbkqObARUb5keYMj6fNUpfsSXjwW6hWLwNJMAEnoLlYolRnrU5OyrPwslWTmdPutDmLOqqIRNwTWiSqWKIFgrlbHMOxQ2qdRRMQgqXUtQxeFqK1CsuYfFFvNXv4pjxBseqCgKSlTc5wa0FzjsBclOqfgrlNhOiyDOuUapYVobqqHQNwB75HWPwjuUFZS9jBcQ5/ITLWHqTsSFddhHuYHnUWucQZ3NpPyWVyujf62+yLMMwDxoYAxg5blx6uPPyQ6nTJjrKkFGXxHP4dkcpZM9lMVCPCSL2hTqnTKTKRUwGDJMbbevNF6OHDCCQNwd49OqMZJgA/xzaY2ufOLBAeJsRoqRqtPK1wUmD6NeZvczDlthpI3Ih3MnTuYm3qrHDuY68BUGoWZUtbdr2nfmYIQfiRznUi4Ms+lTeCL2LWkuBLbCTBEz3KFf4e49up9JxMn2lptD2ASBzOpvzU6eDT2HsS8PykESTr2E2h1WZ9Fazs6MuotG7TEC/4GGxFiq/D9B1fBvoN98PqhoJDfde0xYHlU6I/XwTq2Hq0RIfTqXibt0AXEEbiZKC7M+ijkdInChu5BiD3a18f+fzQmphW6jp3m4iXN5WjZsj8tk15RlgLa9MGHMfT0k8nexaQCY7AR3CW86b/mBzDDp0ukQQ4bgjl33lTroeeyrXwLwC6LbWuCJ6bRt2sh9XLXP1QHEXmN+s99/PmmzBOAYCRIPvA+d4v991MX0gRaO5J6cz1uefJT3BvTm1bDQTIMjz5dDF/3VNzDP2R2kLomOwjHtNhp3mQDsbW629AUk42hoJ5gzBvAEdevJUmhKkFGmIgff2VqGDnJHYx8zMKZ0Hn8lqbfsqaJhWeFG8fforD2qJzYWAV3BRqZ6icFjGNKza68BhbImCeUYyHQ7Y+iuZ9Smoz+V4afMSA5L7XEGQj2HeKzGT71N7XAf6ZGsfIH0VFX1OCOcejpk3DNOkHvY1rnNPPoN/qvUt8P8VvbXLXO8FQwex5LFycir6Ovjc4I6xYsXccZi9CxYsYka8rZYsTAPEx06Yp0m6BBfTD3O/E4u5Tyb2Ed5WLEP0NPpTyWkKtYtfMBsiLX9owfQldExOHa2lIH/wCdR3kfaEADtDW/BeLFJDsTcjpNdVbqAMuvPqnPjTDtpYFnsxp1kF0czH7/ACCxYnE/YM4Txbjg3OJu32gHkxoLfgUucT0rsfJLqkudMRM7iyxYlfgUMVPEOflgLjJZThp5gaiI8oHzKTOEq7mY2npO5IPkWmV6sU6/f/Ck+r/o/ZDWLHVy3dleR5lt/wD0b8EyZFj3jG1xaDoeZk+I0wTz6rxYpT6UvwqY7FuZisWWmDNH/k3bbYD4BDOJ6pDqNQe9Uptc7oXAwHR1hYsT34LIRykwIGxm3IX5LTNaYkHnr+/qVixcxX9ld/4pvyve1kBzVovYX/T9gvVi0+mfguVGDUVG7n6LFi6URojUNbdYsRFKzlG5YsWMYFusWLGNFbyeoQ+xWLE0+ivw667hbBv0uOHpguAJ0jTBibRtdYsWJEOf/9k='

  return (
    <Container>
      <CardImage>
        <Badge position='top' size={65} style={{ right: -250, top: -180 }} />
        <ImageContainer>
          <img src={imageUrl} alt="" style={{ width: 350, height: 350 }} />
        </ImageContainer>
      </CardImage>
      <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1, marginRight: 80, marginLeft: 80 }}>
        <Row>
          <CardImage>
            <Badge position='left' size={45} style={{ bottom: 40, left: 25 }} />
            <ImageContainer>
              <img src={imageUrl} alt="" />
            </ImageContainer>
          </CardImage>
          <CardImage>
            <Badge position='right' size={55} style={{ right: -285, bottom: -40 }} />
            <ImageContainer>
              <img src={imageUrl} alt="" />
            </ImageContainer>
          </CardImage>
        </Row>
      </div>
      <CardImage>
        <Badge position='bottom' size={60} style={{ right: -120, bottom: -160  }} />
        <ImageContainer>
          <img src={imageUrl} alt="" style={{ width: 350, height: 350 }} />
        </ImageContainer>
      </CardImage>
    </Container>
  )
}

export default Content