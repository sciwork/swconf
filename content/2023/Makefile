YARN?=yarn
PELICANOPTS=-t mytheme

BASEDIR=$(CURDIR)
OUTPUTDIR=dist
OUTPUTDIR_PATH=$(BASEDIR)/$(OUTPUTDIR)

help:
	@echo 'Makefile for a nextjs Web site                                                    '
	@echo '                                                                                  '
	@echo 'Usage:                                                                            '
	@echo '   make html                           (re)generate the web site                  '
	@echo '   make clean                          remove the generated files                 '
	@echo '   make serve [PORT=8000]              starts the application in production mode. '
	@echo '   make devserver [PORT=8000]          starts the application in development mode.'
	@echo ''

html:
	OUTPUTDIR=$(OUTPUTDIR) $(YARN) build

clean:
	[ ! -d $(OUTPUTDIR_PATH) ] || rm -rf $(OUTPUTDIR_PATH)

serve:
ifdef PORT
	$(YARN) start -p $(PORT)
else
	$(YARN) start -p 8000
endif

devserver:
ifdef PORT
	$(YARN) dev -p $(PORT)
else
	$(YARN) dev -p 8000
endif


.PHONY: html help clean serve devserver