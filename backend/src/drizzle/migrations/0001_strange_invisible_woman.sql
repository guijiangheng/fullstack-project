ALTER TABLE "users" ADD COLUMN "username" text NOT NULL;--> statement-breakpoint
CREATE INDEX "username_index" ON "users" USING btree ("username");--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "name";