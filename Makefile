.PHONY: db 

db:
	psql -h localhost -p 5434 -U postgres -d postgres

db-run:
	psql -h localhost -p 5434 -U postgres -d postgres -f $(FILE)